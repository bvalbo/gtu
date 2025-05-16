'use client';

import { RacePhase } from '@/lib/constants';
import { CountdownDisplay as CountdownDisplayType } from '@/lib/types';

interface CountdownDisplayProps {
  timeDisplay: CountdownDisplayType;
  racePhase: RacePhase;
}

export default function CountdownDisplay({ timeDisplay, racePhase }: CountdownDisplayProps) {
  const { days, hours, minutes, seconds } = timeDisplay;
  
  // Bestem klassene basert på fasen
  const containerClasses = () => {
    const baseClasses = "flex justify-center items-center space-x-4 py-6 px-4 rounded-lg";
    
    if (racePhase === RacePhase.BEFORE_RACE) {
      return `${baseClasses} bg-gradient-to-r from-blue-900 to-indigo-900 shadow-lg`;
    } else if (racePhase === RacePhase.DURING_RACE) {
      return `${baseClasses} bg-gradient-to-r from-green-800 to-teal-800`;
    } else {
      return `${baseClasses} bg-gradient-to-r from-gray-800 to-gray-700`;
    }
  };
  
  // Bestem størrelsen på tidsdisplayet basert på fasen
  const digitClasses = () => {
    const baseClasses = "flex flex-col items-center";
    
    if (racePhase === RacePhase.BEFORE_RACE) {
      return `${baseClasses} text-5xl md:text-7xl`;
    } else if (racePhase === RacePhase.DURING_RACE) {
      return `${baseClasses} text-4xl md:text-6xl`;
    } else {
      return `${baseClasses} text-3xl md:text-5xl`;
    }
  };
  
  // Viser bare dager hvis vi er i nedtellingsfasen og det er dager igjen
  const showDays = racePhase === RacePhase.BEFORE_RACE && days > 0;
  
  return (
    <div className={containerClasses()}>
      {showDays && (
        <div className={digitClasses()}>
          <span className="text-white font-mono font-bold">{days}</span>
          <span className="text-gray-300 text-xs mt-1">DAGER</span>
        </div>
      )}
      
      <div className={digitClasses()}>
        <span className="text-white font-mono font-bold">{hours.toString().padStart(2, '0')}</span>
        <span className="text-gray-300 text-xs mt-1">TIMER</span>
      </div>
      
      <div className="text-white text-4xl md:text-6xl font-bold">:</div>
      
      <div className={digitClasses()}>
        <span className="text-white font-mono font-bold">{minutes.toString().padStart(2, '0')}</span>
        <span className="text-gray-300 text-xs mt-1">MIN</span>
      </div>
      
      <div className="text-white text-4xl md:text-6xl font-bold">:</div>
      
      <div className={digitClasses()}>
        <span className="text-white font-mono font-bold">{seconds.toString().padStart(2, '0')}</span>
        <span className="text-gray-300 text-xs mt-1">SEK</span>
      </div>
    </div>
  );
}