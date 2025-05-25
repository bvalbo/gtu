// Viktige konstanter for ultraløpet

// Løpets dato og tidspunkt
export const RACE_START_DATE = new Date('2025-05-18T13:00:00+02:00'); // 18. mai 2025 kl. 13:00 CEST
export const RACE_END_TIME = new Date('2025-05-18T21:00:00+02:00');   // 18. mai 2025 kl. 21:00 CEST (8 timer etter start)

// LØPET ER AVSLUTTET - force race phase til AFTER_RACE
export const FORCE_RACE_PHASE = true;
export const FORCED_PHASE = 'AFTER_RACE';

// Løpets faser
export enum RacePhase {
  BEFORE_RACE = 'BEFORE_RACE',  // Før løpet starter
  DURING_RACE = 'DURING_RACE',  // Mens løpet pågår
  AFTER_RACE = 'AFTER_RACE'     // Etter løpet er over
}

// Kontaktinformasjon
export const CONTACTS = [
  { name: 'Hege', role: 'Hjelp underveis', phone: '480 07 214' },
  { name: 'Bjørnar', role: 'Livetracking-link', phone: '924 92 316' },
  { name: 'Rune', role: 'Vipps om du er fornøyd', phone: '482 65 643' },
  { name: 'Rune', role: 'Generell info før løpet', phone: '482 65 643' }
];

// Viktige tidspunkter
export const IMPORTANT_TIMES = [
  { title: 'Oppmøte for kort briefing', time: '12:30', location: 'Utenfor hovedinngangen av Norkirken i Grimstad' },
  { title: 'Startskuddet', time: '13:00', location: 'Utenfor Norkirken Grimstad' }
];

// Standardtekster
export const TEXTS = {
  title: 'Grimstad Terrengultraløp',
  subtitle: '18. mai 2025',
  disclaimer: 'Turen er på eget ansvar!',
  facebookText: 'Viktig å trykke "Skal" på Facebook-arrangementet',
  facebookLink: 'https://fb.me/e/6gPib88Xk',
  routeText: 'Løypen MÅ være lastet inn på klokke og testet i forkant.',
  routeLink: 'https://strava.app.link/Jo6eC7tB6Sb',
  shoeRecommendation: 'Det er tørt og fint, og løypen har en blanding av sti, grus og litt asfalt, så vi anbefaler terrengsko med god demping.',
  raceCompleted: {
    title: 'Løpet er gjennomført!',
    message: 'Tusen takk til alle som deltok i årets Grimstad Terrengultraløp! Det ble en fantastisk dag med strålende vær og flotte prestasjoner.',
    stats: 'Totalt 17 løpere gjennomførte løpet, med tider fra 5:54:50 til 8:08:00.'
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
    headlamp: 'Selv om vi starter kl 13, så skal det være godt med tid før det blir mørkt, så det er ikke behov for hodelykt, med mindre du bruker over 10 timer.'
  }
};

// Sluttresultater fra løpet
export const RESULTS_TEMPLATE = [
  { position: 1, name: 'Kristian', time: '5:54:50', notes: '' },
  { position: 2, name: 'Erlend', time: '6:02:55', notes: '' },
  { position: 3, name: 'Rune', time: '6:12:08', notes: '' },
  { position: 3, name: 'Thomas', time: '6:12:08', notes: '' },
  { position: 5, name: 'Finn Oscar', time: '6:14:25', notes: '' },
  { position: 6, name: 'Sondre', time: '6:47:20', notes: '' },
  { position: 6, name: 'Bjørn Olav', time: '6:47:20', notes: '' },
  { position: 8, name: 'Hans Patrik', time: '7:00:55', notes: '' },
  { position: 9, name: 'Jon Terje', time: '7:03:05', notes: '' },
  { position: 10, name: 'Johan', time: '7:29:55', notes: '' },
  { position: 11, name: 'Mari', time: '7:29:55', notes: '' },
  { position: 12, name: 'Anne', time: '7:34:25', notes: '' },
  { position: 12, name: 'Kenneth', time: '7:34:25', notes: '' },
  { position: 12, name: 'Morten', time: '7:34:25', notes: '' },
  { position: 15, name: 'Ida', time: '7:59:55', notes: '' },
  { position: 16, name: 'Trond', time: '7:59:55', notes: '' },
  { position: 17, name: 'Kim', time: '8:08:00', notes: '' }
];

// Live-tracking er ikke lenger relevant etter løpet
export const LIVE_TRACKING_LINKS = [];