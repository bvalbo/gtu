'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Countdown from '@/components/Countdown/Countdown';
import EventInfo from '@/components/EventInfo/EventInfo';
import LiveTracking from '@/components/LiveTracking/LiveTracking';
import Results from '@/components/Results/Results';
import { RacePhase } from '@/lib/constants';
import { determineRacePhase } from '@/lib/utils';

export default function Home() {
  const [racePhase, setRacePhase] = useState<RacePhase>(RacePhase.BEFORE_RACE);
  
  useEffect(() => {
    // Initialiser riktig fase ved første innlasting
    setRacePhase(determineRacePhase());
    
    // Oppdater fase hvert minutt
    const timer = setInterval(() => {
      setRacePhase(determineRacePhase());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
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
                <h1 className="text-xl font-bold text-white">Grimstad Ultraløp</h1>
                <p className="text-earth-300 text-sm">18. mai 2025</p>
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
            <section id="loypeinfo">
              <EventInfo />
            </section>
            <section id="drikkestasjon">
              <LiveTracking />
            </section>
            <section id="malgang">
              <Results />
            </section>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-forest-900 rounded-lg overflow-hidden sticky top-6">
              <div className="p-4 bg-forest-800">
                <h2 className="font-bold text-xl">Hurtiglenker</h2>
              </div>
              <div className="p-4">
                <nav className="space-y-2">
                  <a href="#loypeinfo" className="block p-2 hover:bg-forest-700 rounded transition-colors text-forest-100 hover:text-white">
                    Løypeinfo
                  </a>
                  <a href="#drikkestasjon" className="block p-2 hover:bg-forest-700 rounded transition-colors text-forest-100 hover:text-white">
                    Drikkestasjon
                  </a>
                  <a href="#malgang" className="block p-2 hover:bg-forest-700 rounded transition-colors text-forest-100 hover:text-white">
                    Målgang
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
    </div>
  );
}