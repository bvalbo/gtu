'use client';

import { Runner } from '@/lib/types';

interface ResultRowProps {
  runner: Runner;
}

export default function ResultRow({ runner }: ResultRowProps) {
  // Definer klasser basert på plassering
  const getPositionClasses = () => {
    const baseClasses = "font-bold";
    
    if (runner.position === 1) {
      return `${baseClasses} text-yellow-400`; // Gull
    } else if (runner.position === 2) {
      return `${baseClasses} text-gray-300`; // Sølv
    } else if (runner.position === 3) {
      return `${baseClasses} text-earth-500`; // Bronse - natural brown tone
    } else {
      return `${baseClasses} text-white`;
    }
  };
  
  // Definer ikoner basert på plassering
  const getPositionIcon = () => {
    if (runner.position === 1) {
      return (
        <span className="mr-1 text-yellow-400">🏆</span>
      );
    } else if (runner.position === 2) {
      return (
        <span className="mr-1 text-gray-300">🥈</span>
      );
    } else if (runner.position === 3) {
      return (
        <span className="mr-1 text-earth-500">🥉</span>
      );
    }
    return null;
  };
  
  return (
    <tr className="hover:bg-forest-800 transition-colors">
      <td className="py-3 px-4">
        <span className={getPositionClasses()}>
          {getPositionIcon()}
          {runner.position}
        </span>
      </td>
      <td className="py-3 px-4 text-white">{runner.name}</td>
      <td className="py-3 px-4 font-mono text-forest-300">{runner.time}</td>
      <td className="py-3 px-4 text-forest-400 italic">{runner.notes}</td>
    </tr>
  );
}