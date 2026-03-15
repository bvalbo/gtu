// Context for providing year-specific race constants
'use client';

import { createContext, useContext, ReactNode } from 'react';
import * as constants2026 from './constants';
import * as constants2025 from './constants-2025';
import { Runner, TrackerLink } from './types';

// Define the shape of our race constants
export interface RaceConstants {
  RACE_START_DATE: Date;
  RACE_END_TIME: Date;
  FORCE_RACE_PHASE: boolean;
  FORCED_PHASE: string;
  RacePhase: typeof constants2026.RacePhase;
  CONTACTS: Array<{ name: string; role: string; phone: string }>;
  IMPORTANT_TIMES: Array<{ title: string; time: string; location: string }>;
  TEXTS: typeof constants2026.TEXTS;
  RESULTS_TEMPLATE: Runner[];
  LIVE_TRACKING_LINKS: TrackerLink[];
}

const RaceYearContext = createContext<RaceConstants>(constants2026 as RaceConstants);

export function useRaceConstants() {
  return useContext(RaceYearContext);
}

interface RaceYearProviderProps {
  year: 2025 | 2026;
  children: ReactNode;
}

export function RaceYearProvider({ year, children }: RaceYearProviderProps) {
  const constants = year === 2025 ? constants2025 : constants2026;
  
  return (
    <RaceYearContext.Provider value={constants as RaceConstants}>
      {children}
    </RaceYearContext.Provider>
  );
}
