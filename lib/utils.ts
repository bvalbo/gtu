// Hjelpefunksjoner for ultraløp-nettsiden

import { RacePhase, RACE_START_DATE, RACE_END_TIME, FORCE_RACE_PHASE, FORCED_PHASE } from './constants';
import { CountdownDisplay } from './types';

/**
 * Bestemmer hvilken fase løpet er i basert på nåværende tid
 */
export function determineRacePhase(): RacePhase {
  // Hvis vi tvinger en bestemt fase (løpet er over)
  if (FORCE_RACE_PHASE && FORCED_PHASE === 'AFTER_RACE') {
    return RacePhase.AFTER_RACE;
  }
  
  const now = new Date();
  
  if (now < RACE_START_DATE) {
    return RacePhase.BEFORE_RACE;
  } else if (now >= RACE_START_DATE && now < RACE_END_TIME) {
    return RacePhase.DURING_RACE;
  } else {
    return RacePhase.AFTER_RACE;
  }
}

/**
 * Beregner gjenstående/medgått tid for nedtelling/opptelling
 */
export function calculateTimeDisplay(currentPhase: RacePhase): CountdownDisplay {
  // Hvis løpet er over, returner null
  if (currentPhase === RacePhase.AFTER_RACE) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
  const now = new Date();
  let diff: number;
  
  if (currentPhase === RacePhase.BEFORE_RACE) {
    // Nedtelling til løpet starter
    diff = RACE_START_DATE.getTime() - now.getTime();
  } else if (currentPhase === RacePhase.DURING_RACE) {
    // Opptelling av hvor lenge løpet har pågått
    diff = now.getTime() - RACE_START_DATE.getTime();
  } else {
    // Etter løpet - returner null for å indikere at løpet er over
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
  // Konvertere millisekunder til dager, timer, minutter og sekunder
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds };
}

/**
 * Formatterer tid til lesbar streng
 */
export function formatTime(time: CountdownDisplay, showLeadingZeros = true): string {
  const { days, hours, minutes, seconds } = time;
  
  const formatNumber = (num: number): string => {
    return showLeadingZeros ? num.toString().padStart(2, '0') : num.toString();
  };
  
  if (days > 0) {
    return `${days}d ${formatNumber(hours)}t ${formatNumber(minutes)}m ${formatNumber(seconds)}s`;
  } else {
    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
  }
}

/**
 * Formatterer dato til norsk format
 */
export function formatDateNorwegian(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric'
  };
  
  return date.toLocaleDateString('nb-NO', options);
}

/**
 * Formatterer dato med klokkeslett til norsk format
 */
export function formatDateTimeNorwegian(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  
  return date.toLocaleDateString('nb-NO', options);
}