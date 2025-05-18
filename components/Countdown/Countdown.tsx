'use client';

import { useState, useEffect } from 'react';
import { RacePhase } from '@/lib/constants';
import { calculateTimeDisplay, determineRacePhase } from '@/lib/utils';
import CountdownDisplay from './CountdownDisplay';

export default function Countdown() {
  const [racePhase, setRacePhase] = useState<RacePhase>(RacePhase.BEFORE_RACE);
  const [timeDisplay, setTimeDisplay] = useState(calculateTimeDisplay(RacePhase.BEFORE_RACE));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted
    setMounted(true);
    
    // Initialize correct phase on first load
    setRacePhase(determineRacePhase());

    // Update countdown/countup every second
    const timer = setInterval(() => {
      const currentPhase = determineRacePhase();
      setRacePhase(currentPhase);
      setTimeDisplay(calculateTimeDisplay(currentPhase));
    }, 1000);

    // Clean up when component unmounts
    return () => clearInterval(timer);
  }, []);

  // Titles based on race phase
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

  // Safe state for theme
  const [isLightThemeState, setIsLightThemeState] = useState(false);
  
  // Check if light theme is active - move to useEffect
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const isLight = document.body.classList.contains('light-theme');
      setIsLightThemeState(isLight);
      
      // Setup a mutation observer to track theme changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            setIsLightThemeState(document.body.classList.contains('light-theme'));
          }
        });
      });
      
      observer.observe(document.body, { attributes: true });
      
      return () => {
        observer.disconnect();
      };
    }
  }, []);
  
  // Set text colors based on theme - with safe fallback
  const titleColor = mounted && isLightThemeState ? "text-forest-800" : "text-white";
  const textColor = mounted && isLightThemeState ? "text-forest-700" : "text-gray-300";

  return (
    <div className="w-full">
      <h2 className={`text-xl text-center font-semibold mb-2 ${titleColor}`}>{getTitle()}</h2>
      <CountdownDisplay 
        timeDisplay={timeDisplay} 
        racePhase={racePhase}
      />
      
      {racePhase === RacePhase.AFTER_RACE && (
        <p className={`text-center mt-4 ${textColor}`}>
          Løpet startet 18. mai 2025 kl. 13:00 og er nå avsluttet.
        </p>
      )}
    </div>
  );
}