'use client';

import { useState, useEffect } from 'react';
import { RacePhase } from '@/lib/constants';
import { CountdownDisplay as CountdownDisplayType } from '@/lib/types';

interface CountdownDisplayProps {
  timeDisplay: CountdownDisplayType;
  racePhase: RacePhase;
}

export default function CountdownDisplay({ timeDisplay, racePhase }: CountdownDisplayProps) {
  const { days, hours, minutes, seconds } = timeDisplay;
  
  // Determine classes based on phase and current theme
  const containerClasses = () => {
    const baseClasses = "flex justify-center items-center space-x-4 py-6 px-4 rounded-lg";
    
    // Check if light theme is active - safely for SSR
    const isLightTheme = typeof window !== 'undefined' ? 
      document.body.classList.contains('light-theme') : false;
    
    if (isLightTheme) {
      if (racePhase === RacePhase.BEFORE_RACE) {
        return `${baseClasses} bg-gradient-to-r from-forest-light-100 to-earth-light-200 shadow-lg`;
      } else if (racePhase === RacePhase.DURING_RACE) {
        return `${baseClasses} bg-gradient-to-r from-forest-light-200 to-earth-light-300`;
      } else {
        return `${baseClasses} bg-gradient-to-r from-forest-light-100 to-earth-light-200`;
      }
    } else {
      // Original dark theme styles
      if (racePhase === RacePhase.BEFORE_RACE) {
        return `${baseClasses} bg-gradient-to-r from-forest-800 to-earth-800 shadow-lg`;
      } else if (racePhase === RacePhase.DURING_RACE) {
        return `${baseClasses} bg-gradient-to-r from-forest-700 to-earth-700`;
      } else {
        return `${baseClasses} bg-gradient-to-r from-forest-800 to-earth-900`;
      }
    }
  };
  
  // Determine digit classes based on phase
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
  
  // We need to use useState and useEffect for theme detection in SSR
  const [isLightTheme, setIsLightTheme] = useState(false);
  
  // Check if light theme is active - safely with useEffect for client-side only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLightTheme(document.body.classList.contains('light-theme'));
    }
  }, []);
  
  // Set text colors based on theme
  const digitColor = isLightTheme ? "text-forest-800" : "text-white";
  const labelColor = isLightTheme ? "text-forest-600" : "text-earth-100";
  const separatorColor = isLightTheme ? "text-forest-700" : "text-white";
  
  // Show days only if we're in countdown phase and there are days left
  const showDays = racePhase === RacePhase.BEFORE_RACE && days > 0;
  
  return (
    <div className={containerClasses()}>
      {showDays && (
        <div className={digitClasses()}>
          <span className={`font-mono font-bold ${digitColor}`}>{days}</span>
          <span className={`text-xs mt-1 ${labelColor}`}>DAGER</span>
        </div>
      )}
      
      <div className={digitClasses()}>
        <span className={`font-mono font-bold ${digitColor}`}>{hours.toString().padStart(2, '0')}</span>
        <span className={`text-xs mt-1 ${labelColor}`}>TIMER</span>
      </div>
      
      <div className={`text-4xl md:text-6xl font-bold ${separatorColor}`}>:</div>
      
      <div className={digitClasses()}>
        <span className={`font-mono font-bold ${digitColor}`}>{minutes.toString().padStart(2, '0')}</span>
        <span className={`text-xs mt-1 ${labelColor}`}>MIN</span>
      </div>
      
      <div className={`text-4xl md:text-6xl font-bold ${separatorColor}`}>:</div>
      
      <div className={digitClasses()}>
        <span className={`font-mono font-bold ${digitColor}`}>{seconds.toString().padStart(2, '0')}</span>
        <span className={`text-xs mt-1 ${labelColor}`}>SEK</span>
      </div>
    </div>
  );
}