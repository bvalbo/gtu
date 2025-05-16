'use client';

import { RacePhase } from '@/lib/constants';
import { determineRacePhase } from '@/lib/utils';
import { TEXTS, IMPORTANT_TIMES } from '@/lib/constants';
import CourseInfo from './CourseInfo';
import ContactInfo from './ContactInfo';
import { useState, useEffect } from 'react';

export default function EventInfo() {
  const [racePhase, setRacePhase] = useState<RacePhase>(RacePhase.BEFORE_RACE);
  
  useEffect(() => {
    setRacePhase(determineRacePhase());
    
    // Sjekk løpsfase hvert minutt
    const timer = setInterval(() => {
      setRacePhase(determineRacePhase());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Bestem hvilken informasjon som skal vises basert på løpsfase
  const renderPhaseSpecificInfo = () => {
    switch(racePhase) {
      case RacePhase.BEFORE_RACE:
        return (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-earth-100">Viktige tider</h2>
              <div className="space-y-4">
                {IMPORTANT_TIMES.map((time, index) => (
                  <div key={index} className="bg-forest-800 p-4 rounded-lg border border-forest-700">
                    <h3 className="text-xl font-medium text-white">{time.title}: <span className="text-earth-300">{time.time}</span></h3>
                    <p className="text-forest-200">{time.location}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-earth-100">Facebook-arrangement</h2>
              <div className="bg-forest-800 p-4 rounded-lg border border-forest-700">
                <p className="text-forest-200 mb-2">{TEXTS.facebookText}</p>
                <a 
                  href={TEXTS.facebookLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-earth-300 hover:text-earth-200 underline inline-flex items-center"
                >
                  Åpne Facebook-arrangement
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </>
        );
        
      case RacePhase.DURING_RACE:
        return (
          <div className="bg-forest-700 p-4 rounded-lg mb-8 animate-pulse border border-forest-600">
            <h2 className="text-2xl font-bold mb-2 text-earth-100">Løpet pågår!</h2>
            <p className="text-forest-100">
              Løpet startet klokken 13:00 den 18. mai. Følg med på live-tracking seksjonen nedenfor for å se hvordan det går med løperne!
            </p>
          </div>
        );
        
      case RacePhase.AFTER_RACE:
        return (
          <div className="bg-forest-800 p-4 rounded-lg mb-8 border border-forest-700">
            <h2 className="text-2xl font-bold mb-2 text-earth-100">Løpet er over</h2>
            <p className="text-forest-200">
              Tusen takk til alle som deltok i årets Grimstad Terrengultraløp! Se resultatlisten nedenfor.
            </p>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <section className="py-8">
      <h1 className="text-4xl font-bold mb-2 text-earth-100">{TEXTS.title}</h1>
      <p className="text-xl text-forest-200 mb-6">{TEXTS.subtitle}</p>
      
      <div className="bg-earth-800 p-4 rounded-lg mb-8 border border-earth-700">
        <p className="text-white font-bold text-lg">{TEXTS.disclaimer}</p>
      </div>
      
      {renderPhaseSpecificInfo()}
      
      <CourseInfo />
      
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4 text-earth-100">{TEXTS.aidStation.title}</h2>
        <div className="bg-forest-800 p-4 rounded-lg border border-forest-700">
          <p className="text-white mb-2">
            <span className="font-semibold">Plassering:</span> {TEXTS.aidStation.location}
          </p>
          <p className="text-forest-200 mb-2">{TEXTS.aidStation.offerings}</p>
          <p className="text-forest-200">{TEXTS.aidStation.dropBag}</p>
        </div>
      </div>
      
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4 text-earth-100">{TEXTS.finish.title}</h2>
        <div className="bg-forest-800 p-4 rounded-lg border border-forest-700">
          <ul className="space-y-2 text-forest-200">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-earth-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {TEXTS.finish.firepit}
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-earth-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {TEXTS.finish.grilling}
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-earth-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {TEXTS.finish.stayingAfter}
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-earth-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {TEXTS.finish.headlamp}
            </li>
          </ul>
        </div>
      </div>
      
      <ContactInfo />
    </section>
  );
}