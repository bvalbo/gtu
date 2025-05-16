'use client';

import { TEXTS } from '@/lib/constants';

export default function CourseInfo() {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4 text-earth-100">Løypen</h2>
      <div className="bg-forest-800 p-4 rounded-lg border border-forest-700">
        <p className="text-forest-100 mb-4">{TEXTS.routeText}</p>
        
        <div className="mb-4">
          <a 
            href={TEXTS.routeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-earth-700 hover:bg-earth-600 text-white py-2 px-4 rounded transition-colors"
          >
            <span className="flex items-center">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 20L3 17V7L9 4M9 20L15 17M9 20V4M15 17L21 20V10L15 7M15 17V7M9 10L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Se løype på Strava
            </span>
          </a>
        </div>
        
        <div className="p-3 bg-forest-700 rounded mt-4">
          <p className="text-forest-100 italic">
            {TEXTS.shoeRecommendation}
          </p>
        </div>
        
        <div className="mt-6">
          <h3 className="font-semibold text-lg text-earth-200 mb-2">Viktige punkter i løypen:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-earth-600 text-white rounded-full h-6 w-6 mr-2 mt-0.5 text-sm">1</span>
              <span className="text-forest-100">Start: Norkirken Grimstad</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-earth-600 text-white rounded-full h-6 w-6 mr-2 mt-0.5 text-sm">2</span>
              <span className="text-forest-100">Drikkestasjon: Byggefeltet Bakken (ca. 21 km)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-earth-600 text-white rounded-full h-6 w-6 mr-2 mt-0.5 text-sm">3</span>
              <span className="text-forest-100">Mål: Norkirken Grimstad</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}