'use client';

import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import Countdown from '@/components/Countdown/Countdown';
import EventInfo from '@/components/EventInfo/EventInfo';
import LiveTracking from '@/components/LiveTracking/LiveTracking';
import Results from '@/components/Results/Results';
import PhotoGallery from '@/components/PhotoGallery/PhotoGallery';
import { RacePhase, TEXTS } from '@/lib/constants';
import { determineRacePhase } from '@/lib/utils';

export default function Home() {
  const [racePhase, setRacePhase] = useState<RacePhase>(RacePhase.BEFORE_RACE);
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Set mounted to true after component mounts
    setMounted(true);
    
    // Initialize race phase and theme
    setRacePhase(determineRacePhase());
    
    // Check for saved theme preference (only in browser)
    const savedTheme = localStorage.getItem('grimstad-theme');
    if (savedTheme === 'light') {
      setIsLightTheme(true);
      document.body.classList.add('light-theme');
    }
    
    // Update phase every minute (though it's now forced to AFTER_RACE)
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

  // Theme-aware classes
  const titleColor = mounted && isLightTheme ? 'text-forest-800' : 'text-white';
  const subtitleColor = mounted && isLightTheme ? 'text-forest-600' : 'text-earth-300';
  const completedBg = mounted && isLightTheme ? 'bg-green-50 border-green-200' : 'bg-green-900 bg-opacity-30 border-green-700';
  const completedText = mounted && isLightTheme ? 'text-green-800' : 'text-green-200';
  
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
        {/* Hero section - only show countdown if race is not over */}
        {racePhase !== RacePhase.AFTER_RACE && (
          <div className="mb-8 lg:mb-12">
            <Countdown />
          </div>
        )}

        {/* Race completed banner */}
        {racePhase === RacePhase.AFTER_RACE && (
          <div className={`${completedBg} border-2 rounded-lg p-6 mb-8 text-center`}>
            <h2 className={`text-3xl font-bold mb-2 ${completedText}`}>
              {TEXTS.raceCompleted.title}
            </h2>
            <p className={`text-lg mb-3 ${completedText}`}>
              {TEXTS.raceCompleted.message}
            </p>
            <p className={`${completedText} font-medium`}>
              {TEXTS.raceCompleted.stats}
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <section id="resultater">
              <Results />
            </section>
            
            {/* Only show gallery if race is completed */}
            {racePhase === RacePhase.AFTER_RACE && (
              <section id="bildegalleri">
                <PhotoGallery />
              </section>
            )}
            
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
                  <a href="#resultater" className="block p-2 hover:bg-forest-700 rounded transition-colors text-forest-100 hover:text-white">
                    Resultater
                  </a>
                  {racePhase === RacePhase.AFTER_RACE && (
                    <a href="#bildegalleri" className="block p-2 hover:bg-forest-700 rounded transition-colors text-forest-100 hover:text-white">
                      Bildegalleri
                    </a>
                  )}
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
                <h3 className="font-medium mb-2">Løpet 18. mai</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-forest-200 text-sm">Status:</span>
                    <span className="text-green-400 font-medium">Gjennomført</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-forest-200 text-sm">Deltagere:</span>
                    <span className="text-white">17 løpere</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-forest-200 text-sm">Vinnertid:</span>
                    <span className="text-yellow-400 font-mono">5:54:50</span>
                  </div>
                </div>
              </div>
              
              {racePhase === RacePhase.AFTER_RACE && (
                <div className="p-4 bg-earth-800 bg-opacity-50">
                  <h3 className="font-medium mb-2">Takk for i år!</h3>
                  <p className="text-earth-100 text-sm">
                    Tusen takk til alle som deltok. Vi ses neste år for en ny utgave av Grimstad Terrengultraløp!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
      
      {/* Theme toggle button - only show on client side */}
      {mounted && (
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
      )}
    </div>
  );
}