'use client';

import { useState, useEffect } from 'react';
import { RacePhase } from '@/lib/constants';
import { determineRacePhase } from '@/lib/utils';
import { LIVE_TRACKING_LINKS } from '@/lib/constants';
import TrackerEmbed from './TrackerEmbed';

export default function LiveTracking() {
  const [racePhase, setRacePhase] = useState<RacePhase>(RacePhase.BEFORE_RACE);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const currentPhase = determineRacePhase();
    setRacePhase(currentPhase);
    
    // Vis bare live-tracking under løpet
    setIsVisible(currentPhase === RacePhase.DURING_RACE);
    
    // Sjekk løpsfase hvert minutt
    const timer = setInterval(() => {
      const phase = determineRacePhase();
      setRacePhase(phase);
      setIsVisible(phase === RacePhase.DURING_RACE);
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
  if (!isVisible) {
    return null;
  }
  
  return (
    <section className="py-8 border-t-2 border-gray-800">
      <h2 className="text-3xl font-bold mb-6 flex items-center">
        <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
        Live-tracking
      </h2>
      
      {LIVE_TRACKING_LINKS.length === 0 ? (
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <p className="text-gray-300 mb-4">Ingen live-tracking-lenker er lagt til ennå.</p>
          <p className="text-gray-400 text-sm">
            Live-tracking-lenker vil bli lagt til når løpet starter. Oppdater siden senere.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {LIVE_TRACKING_LINKS.map((tracker, index) => (
            <TrackerEmbed 
              key={index} 
              name={tracker.name}
              url={tracker.url}
            />
          ))}
        </div>
      )}
      
      <div className="mt-8 p-4 bg-blue-900 bg-opacity-30 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Har du en tracking-lenke?</h3>
        <p className="text-gray-300 mb-4">
          Send din Strava Beacon eller Garmin LiveTrack-lenke til Bjørnar på telefon: 924 92 316
        </p>
      </div>
    </section>
  );
}