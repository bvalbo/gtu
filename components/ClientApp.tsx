'use client';

import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import Countdown from '@/components/Countdown/Countdown';
import EventInfo from '@/components/EventInfo/EventInfo';
import LiveTracking from '@/components/LiveTracking/LiveTracking';
import Results from '@/components/Results/Results';
import { RacePhase } from '@/lib/constants';
import { determineRacePhase } from '@/lib/utils';

export default function ClientApp() {
  const [racePhase, setRacePhase] = useState<RacePhase>(RacePhase.BEFORE_RACE);
  const [isLightTheme, setIsLightTheme] = useState(false);
  
  useEffect(() => {
    // Initialize race phase and theme
    setRacePhase(determineRacePhase());
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('grimstad-theme');
    if (savedTheme === 'light') {
      setIsLightTheme(true);
      document.body.classList.add('light-theme');
    }
    
    // Update phase every minute
    const timer = setInterval(() => {
      setRacePhase(determineRacePhase());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Toggle theme function
  const toggleTheme = () => {
    setIsLightTheme(prev => {
      const newTheme = !prev;
      if (newTheme) {
        document.body.classList.add('light-theme');
        localStorage.setItem('grimstad-theme', 'light');
      } else {
        document.body.classList.remove('light-theme');
        localStorage.setItem('grimstad-theme', 'dark');
      }
      return newTheme;
    });
  };
  
  return (
    <div className="min-h-screen bg-gradient-trail">
      <header className="bg-forest-900 border-b border-forest-800">
        <Container>
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-3">
                <div className="h-12 w-12 rounded-full bg-earth-700 flex items-center justify-center text-white font-bold text-xl">
                  GU
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Grimstad Terrengultraløp</h1>
                <p className="text-earth-300 text-sm">www.grimstad.run</p>
              </div>
            </div>
          </div>
        </Container>
      </header>
      
      <Container className="py-6">
        <div className={`mb-8 ${racePhase !== RacePhase.AFTER_RACE ? 'lg:mb-12' : 'mb-8'}`}>
          <Countdown />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <section id="malgang">
              <Results />
            </section>
            <section id="livetracking">
              <LiveTracking />
            </section>
            <section id="loypeinfo">
              <EventInfo />
            </section>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-forest-900 rounded-lg overflow-hidden sticky top-6">
              <div className="p-4 bg-forest-800">
                <h2 className="font-bold text-xl">Hurtiglenker</h2>
              </div>
              <div className="p-4">
                <nav className="space-y-2">
                  <a href="#malgang" className="block p-2 hover:bg-forest-700 rounded transition-colors text-forest-100 hover:text-white">
                    Resultater
                  </a>
                  <a href="#livetracking" className="block p-2 hover:bg-forest-700 rounded transition-colors text-forest-100 hover:text-white">
                    Live-tracking
                  </a>
                  <a href="#loypeinfo" className="block p-2 hover:bg-forest-700 rounded transition-colors text-forest-100 hover:text-white">
                    Løypeinfo
                  </a>
                  <a href="#drikkestasjon" className="block p-2 hover:bg-forest-700 rounded transition-colors text-forest-100 hover:text-white">
                    Drikkestasjon
                  </a>
                  <a href="#kontaktpersoner" className="block p-2 hover:bg-forest-700 rounded transition-colors text-forest-100 hover:text-white">
                    Kontaktpersoner
                  </a>
                </nav>
              </div>
              
              <div className="p-4 border-t border-forest-700">
                <h3 className="font-medium mb-2">Været i Grimstad</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <svg className="h-8 w-8 text-yellow-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="text-white text-lg">18°C</span>
                  </div>
                  <span className="text-forest-200">Sol, lett bris</span>
                </div>
              </div>
              
              {racePhase === RacePhase.BEFORE_RACE && (
                <div className="p-4 bg-earth-800 bg-opacity-50">
                  <h3 className="font-medium mb-2">Påminnelse</h3>
                  <p className="text-earth-100 text-sm">
                    Husk å laste inn løypen på klokken din og teste den i forkant!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
      
      {/* Theme toggle button */}
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label={isLightTheme ? "Switch to dark theme" : "Switch to light theme"}
      >
        {isLightTheme ? (
          // Moon icon for dark mode
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        ) : (
          // Sun icon for light mode
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        )}
      </button>
    </div>
  );
}
