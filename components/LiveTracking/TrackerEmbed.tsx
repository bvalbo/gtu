'use client';

interface TrackerEmbedProps {
  name: string;
  url: string;
}

export default function TrackerEmbed({ name, url }: TrackerEmbedProps) {
  // Funksjon som bestemmer riktig height for iframes
  const getIframeHeight = () => {
    if (url.includes('strava.com')) {
      return '400px'; // Strava Beacon
    } else if (url.includes('garmin.com')) {
      return '450px'; // Garmin LiveTrack
    } else {
      return '400px'; // Standard høyde
    }
  };
  
  return (
    <div className="bg-forest-800 rounded-lg overflow-hidden border border-forest-700">
      <div className="p-3 bg-forest-700 flex items-center justify-between">
        <h3 className="font-semibold text-earth-100">{name}</h3>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-earth-300 hover:text-earth-200 text-sm"
        >
          Åpne i nytt vindu
        </a>
      </div>
      
      <div className="tracker-container p-1">
        <iframe 
          src={url}
          title={`Live-tracking for ${name}`}
          className="w-full border-none"
          style={{ height: getIframeHeight() }}
          allowFullScreen
          loading="lazy"
        />
      </div>
      
      <style jsx>{`
        .tracker-container iframe {
          background-color: white;
        }
      `}</style>
    </div>
  );
}