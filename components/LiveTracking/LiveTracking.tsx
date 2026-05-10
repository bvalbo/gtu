'use client';

import { useState, useEffect } from 'react';
import { useRaceConstants } from '@/lib/RaceYearContext';
import { determineRacePhase } from '@/lib/utils';
import TrackerEmbed from './TrackerEmbed';

export default function LiveTracking() {
  const { RacePhase, LIVE_TRACKING_LINKS } = useRaceConstants();
  const [racePhase, setRacePhase] = useState(RacePhase.BEFORE_RACE);
  const [isVisible, setIsVisible] = useState(false);
  const ultratrackerUrl = 'https://www.ultratracker.app/embed/86f9b690-6464-46ce-bc9f-feb417a19ec5?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ2aWV3ZXI6ODZmOWI2OTAtNjQ2NC00NmNlLWJjOWYtZmViNDE3YTE5ZWM1Iiwicm9sZSI6InZpZXdlciIsInJhY2VJZCI6Ijg2ZjliNjkwLTY0NjQtNDZjZS1iYzlmLWZlYjQxN2ExOWVjNSIsImp0aSI6IjQ0YmI4ZjEyLTBlMjEtNDlmZC04NTEzLWFiYzEwNjBmYzk3MSIsImlhdCI6MTc3ODQwMDQ5MiwiZXhwIjoxNzc5MDU1MTk4LCJhdWQiOiJ1bHRyYXRyYWNrZXIiLCJpc3MiOiJ1bHRyYXRyYWNrZXItYXBpIn0.xG0JG3BrFCNNdAZjfn-NrW3i7ojRxav505Pj23H4qwk';
  
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
    <section className="py-8 border-t-2 border-forest-700">
      <h2 className="text-3xl font-bold mb-6 flex items-center text-earth-100">
        <span className="inline-block w-3 h-3 bg-forest-400 rounded-full mr-2 animate-pulse"></span>
        Live-tracking
      </h2>

      <div className="bg-forest-800 p-4 rounded-lg border border-forest-700 mb-6">
        <div className="mb-3">
          <a
            href={ultratrackerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-earth-300 hover:text-earth-200 underline"
          >
            Se i fullskjerm
          </a>
        </div>
        <iframe
          src={ultratrackerUrl}
          width="100%"
          height="600"
          frameBorder="0"
          allowFullScreen
          title="Ultratracker livekart"
          className="w-full rounded"
        ></iframe>
      </div>
      
      {LIVE_TRACKING_LINKS.length === 0 ? (
        <div className="bg-forest-800 p-6 rounded-lg text-center border border-forest-700">
          <p className="text-forest-200 mb-4">Ingen ekstra live-tracking-lenker er lagt til ennå.</p>
          <p className="text-forest-300 text-sm">
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
      
    </section>
  );
}