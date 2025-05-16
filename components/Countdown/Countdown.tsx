'use client';

import { useState, useEffect } from 'react';
import { RacePhase } from '@/lib/constants';
import { calculateTimeDisplay, determineRacePhase } from '@/lib/utils';
import CountdownDisplay from './CountdownDisplay';

export default function Countdown() {
  const [racePhase, setRacePhase] = useState<RacePhase>(RacePhase.BEFORE_RACE);
  const [timeDisplay, setTimeDisplay] = useState(calculateTimeDisplay(RacePhase.BEFORE_RACE));

  useEffect(() => {
    // Initialiser riktig fase ved første innlasting
    setRacePhase(determineRacePhase());

    // Oppdater nedtelling/opptelling hvert sekund
    const timer = setInterval(() => {
      const currentPhase = determineRacePhase();
      setRacePhase(currentPhase);
      setTimeDisplay(calculateTimeDisplay(currentPhase));
    }, 1000);

    // Rydde opp når komponenten unmounts
    return () => clearInterval(timer);
  }, []);

  // Titler basert på løpets fase
  const getTitle = () => {
    switch (racePhase) {
      case RacePhase.BEFORE_RACE:
        return 'Nedtelling til start';
      case RacePhase.DURING_RACE:
        return 'Løpet pågår';
      case RacePhase.AFTER_RACE:
        return 'Løpet er over';
      default:
        return 'Nedtelling';
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-xl text-center font-semibold mb-2">{getTitle()}</h2>
      <CountdownDisplay 
        timeDisplay={timeDisplay} 
        racePhase={racePhase}
      />
      
      {racePhase === RacePhase.AFTER_RACE && (
        <p className="text-center mt-4 text-gray-300">
          Løpet startet 18. mai 2025 kl. 13:00 og er nå avsluttet.
        </p>
      )}
    </div>
  );
}