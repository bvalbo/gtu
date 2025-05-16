// TypeScript typer for prosjektet

// Type for resultater
export interface Runner {
  position: number;
  name: string;
  time: string;
  notes?: string;
}

// Type for kontaktperson
export interface Contact {
  name: string;
  role: string;
  phone: string;
}

// Type for viktige tidspunkter
export interface ImportantTime {
  title: string;
  time: string;
  location: string;
}

// Type for live-tracking
export interface TrackerLink {
  name: string;
  url: string;
}

// Type for nedtellingsvisning
export interface CountdownDisplay {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Type for løpets faser
export enum RacePhaseType {
  BEFORE_RACE = 'BEFORE_RACE',
  DURING_RACE = 'DURING_RACE',
  AFTER_RACE = 'AFTER_RACE'
}