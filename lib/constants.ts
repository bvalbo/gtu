// Viktige konstanter for ultraløpet

import { TrackerLink } from './types';

// Løpets dato og tidspunkt
export const RACE_START_DATE = new Date('2026-05-10T13:00:00+02:00'); // 10. mai 2026 kl. 13:00 CEST
export const RACE_END_TIME = new Date('2026-05-10T21:00:00+02:00');   // 10. mai 2026 kl. 21:00 CEST (11 timer etter start)

// Løpet er ikke startet ennå
export const FORCE_RACE_PHASE = false;
export const FORCED_PHASE: 'BEFORE_RACE' | 'DURING_RACE' | 'AFTER_RACE' = 'BEFORE_RACE';

// Løpets faser
export enum RacePhase {
  BEFORE_RACE = 'BEFORE_RACE',  // Før løpet starter
  DURING_RACE = 'DURING_RACE',  // Mens løpet pågår
  AFTER_RACE = 'AFTER_RACE'     // Etter løpet er over
}

// Kontaktinformasjon
export const CONTACTS = [
  { name: 'Hege', role: 'Hjelp underveis', phone: '480 07 214' },
  { name: 'Bjørnar', role: 'Send livetracking-link', phone: '924 92 316' },
  { name: 'Rune', role: 'Påmelding og generell info', phone: '482 65 643' }
];

// Viktige tidspunkter
export const IMPORTANT_TIMES = [
  { title: 'Oppmøte for kort briefing', time: '12:30', location: 'Utenfor hovedinngangen av Norkirken i Grimstad' },
  { title: 'Startskuddet', time: '13:00', location: 'Utenfor Norkirken Grimstad' }
];

// Standardtekster
export const TEXTS = {
  title: 'Grimstad Terrengultraløp',
  subtitle: '📍 Grimstad  |  🗓️ 10. mai 2026  |  👟 52 km',
  disclaimer: 'Turen er på eget ansvar!',
  welcome: 'Velkommen til Grimstad terrengultra 2026! Traséen på 52 km er godkjent av både Statsforvalteren og kommunen i år, men vil fremdeles ha preg som et "venners venner løpetur", da det ikke står en organisasjon bak, men det er en sosial happening hvor du får anledning til å løpe sammen med andre, eller i ditt eget tempo i flotte omgivelser i Grimstad.',
  routeDescription: 'Løypen går blant annet innom vestlandske hovedvei, barnevandrerstien, og flere av heiene som omkranser sentrum. Navigering skjer via GPX fil.',
  registration: 'Skal du delta, så vippser du 100kr til 482 65 643 og trykker "Skal" på Facebook-arrangementet.',
  facebookText: 'Viktig å trykke "Skal" på Facebook-arrangementet',
  facebookLink: 'https://www.facebook.com/events/s/grimstad-terrengultra/2116324909208880',
  routeText: 'Løypen MÅ være lastet inn på klokke og testet i forkant.',
  routeLink: 'https://strava.app.link/dGukuOfwpTb',
  routeNote: 'Dette er fjorårets trasé. Noen mindre justeringer gjøres fortløpende så ny link vil legges ut nærmere løpsdato.',
  shoeRecommendation: 'Traséen har en blanding av sti, grus og litt asfalt, så vi anbefaler terrengsko med god demping.',
  raceCompleted: {
    title: 'Løpet er gjennomført!',
    message: 'Tusen takk til alle som deltok i årets Grimstad Terrengultraløp!',
    stats: 'Resultater oppdateres etter løpet.'
  },
  aidStation: {
    title: 'Drikke- og vaffelstasjon med mulighet for dropbag',
    location: 'Byggefeltet Bakken etter ca 21 km',
    offerings: 'Her er det vann, saft og vafler å få!',
    dropBag: 'Dere kan også levere en drop bag ved start, som vi transporterer til Bakken.'
  },
  finish: {
    title: 'Målgang',
    firepit: 'I målområdet fyrer vi i gang bålpanne og setter opp stoler så man kan slå av en prat',
    grilling: 'Det vil være mulighet for å grille om man har med seg noe mat i kjøleboks f.eks.',
    stayingAfter: 'Veldig hyggelig om vi er en del som blir igjen litt.',
    headlamp: 'Selv om vi starter kl 13:00, så skal det være godt med tid før det blir mørkt, så det er ikke behov for hodelykt (med mindre du bruker over 9 timer).'
  }
};

// Sluttresultater fra løpet (oppdateres etter løpet)
export const RESULTS_TEMPLATE = [
  // Resultater legges til etter løpet
];

// Live-tracking links (oppdateres når løpet starter)
// Explicitly type as TrackerLink[] to avoid TypeScript 'never' inference
export const LIVE_TRACKING_LINKS: TrackerLink[] = [];