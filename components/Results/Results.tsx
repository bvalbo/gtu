'use client';

import { useState, useEffect } from 'react';
import { Runner } from '@/lib/types';
import { RacePhase } from '@/lib/constants';
import { determineRacePhase } from '@/lib/utils';
import { RESULTS_TEMPLATE } from '@/lib/constants';
import ResultRow from './ResultRow';

export default function Results() {
  const [results, setResults] = useState<Runner[]>(RESULTS_TEMPLATE);
  const [racePhase, setRacePhase] = useState<RacePhase>(RacePhase.BEFORE_RACE);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const currentPhase = determineRacePhase();
    setRacePhase(currentPhase);
    
    // Vis bare resultater etter løpet
    setIsVisible(currentPhase === RacePhase.AFTER_RACE);
    
    // Sjekk løpsfase hvert minutt
    const timer = setInterval(() => {
      const phase = determineRacePhase();
      setRacePhase(phase);
      setIsVisible(phase === RacePhase.AFTER_RACE);
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
  if (!isVisible) {
    return null;
  }
  
  // Sorter resultatene etter plassering
  const sortedResults = [...results].sort((a, b) => a.position - b.position);
  
  return (
    <section className="py-8 border-t-2 border-forest-700">
      <h2 className="text-3xl font-bold mb-6 text-earth-100">Resultater</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-forest-800">
            <tr>
              <th className="py-3 px-4 text-left text-forest-100 font-semibold">#</th>
              <th className="py-3 px-4 text-left text-forest-100 font-semibold">Navn</th>
              <th className="py-3 px-4 text-left text-forest-100 font-semibold">Tid</th>
              <th className="py-3 px-4 text-left text-forest-100 font-semibold">Merknader</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-forest-700">
            {sortedResults.map((runner) => (
              <ResultRow key={runner.position} runner={runner} />
            ))}
          </tbody>
        </table>
      </div>
      
      {sortedResults.length === 0 && (
        <div className="bg-forest-800 p-6 rounded-lg text-center mt-4 border border-forest-700">
          <p className="text-forest-200">Resultatene vil bli publisert etter løpet.</p>
        </div>
      )}
    </section>
  );
}