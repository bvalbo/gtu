// Viktige konstanter for ultraløpet

// Løpets dato og tidspunkt
export const RACE_START_DATE = new Date('2025-05-18T13:00:00+02:00'); // 18. mai 2025 kl. 13:00 CEST
export const RACE_END_TIME = new Date('2025-05-19T00:00:00+02:00');   // 19. mai 2025 kl. 00:00 CEST (11 timer etter start)

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

// Eksempel-resultatliste (kan redigeres manuelt etter løpet)
export const RESULTS_TEMPLATE = [
  { position: 1, name: 'Kristian', time: '5:54:50', notes: '' },
  { position: 2, name: 'Erlend', time: '6:02:55', notes: '' },
  { position: 3, name: 'Rune', time: '6:12:08', notes: '' },
  { position: 3, name: 'Thomas', time: '6:12:08', notes: '' },
  { position: 5, name: 'Finn Oscar', time: '6:14:25', notes: '' }
];

// Eksempel på live-tracking-linker (kan oppdateres før løpet)
export const LIVE_TRACKING_LINKS = [
  { name: 'Rune Hystad', url: 'https://livetrack.garmin.com/session/be18411b-88d5-855e-b1f1-db4a56f92e00/token/AAAC7190A4F33DBA16647DF32B282081' },
  { name: 'Finn Oscar Kalrsen', url: 'https://livetrack.garmin.com/session/1964bd36-57c4-8915-ab1f-a782bd772a00/token/C28D8FEA7C14C044A54DA9369EE65B86' },
  { name: 'Erlend Bjerkestrand', url: 'https://livetrack.garmin.com/session/d9210f96-6176-8fcb-acbb-94df6acb1400/token/CA382658D1A83FDE9ED13C7BC413DDB' }
];