'use client';

import { useState, useEffect } from 'react';

interface Participant {
  name: string;
  location: string;
  club: string;
  clubLink: string;
}

export default function StartList() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStartList = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQC3Tgk4ybLaHYRqliyu2tIvKn2kUS7D7kpWINP0k4NzPDCD8WFFksxHEwrDeOZSBAzPHpPq1KRJTVS/pub?gid=0&single=true&output=csv');
        const csvText = await response.text();
        
        // Parse CSV - handle quoted fields properly
        const parseCSVLine = (line: string): string[] => {
          const result: string[] = [];
          let current = '';
          let inQuotes = false;
          
          for (let i = 0; i < line.length; i++) {
            const char = line[i];
            const nextChar = line[i + 1];
            
            if (char === '"') {
              if (inQuotes && nextChar === '"') {
                current += '"';
                i++; // Skip next quote
              } else {
                inQuotes = !inQuotes;
              }
            } else if (char === ',' && !inQuotes) {
              result.push(current.trim());
              current = '';
            } else {
              current += char;
            }
          }
          result.push(current.trim());
          return result;
        };
        
        const lines = csvText.split('\n');
        const data: Participant[] = [];
        
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (!line) continue;
          
          const values = parseCSVLine(line);
          if (values.length >= 2 && values[0]) { // At least name and location, and name is not empty
            data.push({
              name: values[0] || '',
              location: values[1] || '',
              club: values[2] || '',
              clubLink: values[3] || ''
            });
          }
        }
        
        setParticipants(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching start list:', err);
        setError('Kunne ikke laste inn startlisten');
      } finally {
        setLoading(false);
      }
    };

    fetchStartList();
  }, []);

  if (loading) {
    return (
      <div className="bg-forest-800 p-6 rounded-lg text-center border border-forest-700">
        <p className="text-forest-200">Laster startliste...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-forest-800 p-6 rounded-lg text-center border border-forest-700">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  if (participants.length === 0) {
    return (
      <div className="bg-forest-800 p-6 rounded-lg text-center border border-forest-700">
        <p className="text-forest-200">Ingen påmeldte ennå. Vær den første!</p>
      </div>
    );
  }

  return (
    <div className="bg-forest-800 p-6 rounded-lg border border-forest-700">
      <div className="mb-4">
        <p className="text-forest-200">
          <span className="font-semibold text-white">{participants.length}</span> påmeldte deltagere
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-forest-900">
            <tr>
              <th className="py-3 px-4 text-left text-forest-100 font-semibold">#</th>
              <th className="py-3 px-4 text-left text-forest-100 font-semibold">Navn</th>
              <th className="py-3 px-4 text-left text-forest-100 font-semibold">Sted</th>
              <th className="py-3 px-4 text-left text-forest-100 font-semibold">Klubb</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-forest-700">
            {participants.map((participant, index) => (
              <tr key={index} className="hover:bg-forest-700 transition-colors">
                <td className="py-3 px-4 text-forest-200">{index + 1}</td>
                <td className="py-3 px-4 text-white font-medium">{participant.name}</td>
                <td className="py-3 px-4 text-forest-200">{participant.location}</td>
                <td className="py-3 px-4 text-forest-200">
                  {participant.club && participant.clubLink ? (
                    <a 
                      href={participant.clubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-earth-300 hover:text-earth-200 underline"
                    >
                      {participant.club}
                    </a>
                  ) : (
                    participant.club || '-'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
