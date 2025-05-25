'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: string;
  src: string;
  thumb: string;
  alt: string;
  caption: string;
}

interface GalleryResponse {
  images: GalleryImage[];
  count: number;
  message: string;
  error?: string;
}

export default function PhotoGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Hent bilder fra API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/gallery');
        const data: GalleryResponse = await response.json();
        
        if (data.error) {
          setError(data.error);
        } else {
          setImages(data.images);
        }
      } catch (err) {
        setError('Kunne ikke laste inn bilder');
        console.error('Error fetching gallery images:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    setMounted(true);
    
    // Check if light theme is active
    if (typeof document !== 'undefined') {
      const isLight = document.body.classList.contains('light-theme');
      setIsLightTheme(isLight);
      
      // Setup observer for theme changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            setIsLightTheme(document.body.classList.contains('light-theme'));
          }
        });
      });
      
      observer.observe(document.body, { attributes: true });
      
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  const openImage = (image: GalleryImage) => {
    const index = images.findIndex(img => img.id === image.id);
    setCurrentIndex(index);
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentIndex, images]);

  // Theme-aware classes
  const galleryBg = mounted && isLightTheme ? 'bg-white' : 'bg-forest-800';
  const galleryBorder = mounted && isLightTheme ? 'border-gray-200' : 'border-forest-700';
  const titleColor = mounted && isLightTheme ? 'text-forest-800' : 'text-earth-100';
  const captionColor = mounted && isLightTheme ? 'text-gray-600' : 'text-forest-200';
  const errorColor = mounted && isLightTheme ? 'text-red-600' : 'text-red-400';

  return (
    <section className="py-8 border-t-2 border-forest-700">
      <h2 className={`text-3xl font-bold mb-6 ${titleColor}`}>Bilder fra løpet</h2>
      
      {loading && (
        <div className={`${galleryBg} ${galleryBorder} border rounded-lg p-8 text-center`}>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-earth-600 mx-auto mb-4"></div>
          <p className={captionColor}>Laster inn bilder...</p>
        </div>
      )}

      {error && (
        <div className={`${galleryBg} ${galleryBorder} border rounded-lg p-6 text-center`}>
          <svg className={`h-12 w-12 ${errorColor} mx-auto mb-4`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className={`${errorColor} font-medium mb-2`}>Kunne ikke laste inn bilder</p>
          <p className={captionColor}>
            Kontroller at bildene er lagt til i mappene <code>/public/images/gallery/full/</code> og <code>/public/images/gallery/thumbs/</code>
          </p>
        </div>
      )}

      {!loading && !error && images.length === 0 && (
        <div className={`${galleryBg} ${galleryBorder} border rounded-lg p-6 text-center`}>
          <svg className={`h-12 w-12 ${captionColor} mx-auto mb-4`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <p className={`${captionColor} font-medium mb-2`}>Ingen bilder funnet</p>
          <p className={captionColor}>
            Legg til bilder i <code>/public/images/gallery/full/</code> mappen for å vise dem her.
          </p>
        </div>
      )}
      
      {!loading && !error && images.length > 0 && (
        <>
          {/* Thumbnail grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {images.map((image) => (
              <div
                key={image.id}
                className={`${galleryBg} ${galleryBorder} border rounded-lg overflow-hidden cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg`}
                onClick={() => openImage(image)}
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.thumb}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    onError={(e) => {
                      // Fallback til full-størrelse bilde hvis thumbnail ikke finnes
                      const target = e.target as HTMLImageElement;
                      target.src = image.src;
                    }}
                  />
                </div>
                {image.caption && (
                  <div className="p-3">
                    <p className={`text-sm ${captionColor}`}>{image.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Modal for full-size image */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
              {/* Close button */}
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
                aria-label="Lukk bildegalleri"
              >
                ×
              </button>

              {/* Previous button */}
              {images.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-6xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-16 h-16 flex items-center justify-center"
                  aria-label="Forrige bilde"
                >
                  ‹
                </button>
              )}

              {/* Next button */}
              {images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-6xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-16 h-16 flex items-center justify-center"
                  aria-label="Neste bilde"
                >
                  ›
                </button>
              )}

              {/* Main image */}
              <div className="max-w-full max-h-full flex flex-col items-center">
                <div className="relative max-w-full max-h-[80vh]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={1200}
                    height={800}
                    className="object-contain max-w-full max-h-full"
                    priority
                  />
                </div>
                
                {/* Image caption and counter */}
                <div className="mt-4 text-center">
                  {selectedImage.caption && (
                    <p className="text-white text-lg mb-2">{selectedImage.caption}</p>
                  )}
                  <p className="text-gray-400 text-sm">
                    {currentIndex + 1} av {images.length}
                  </p>
                </div>
              </div>

              {/* Thumbnail strip at bottom - only show if more than 1 image */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto px-4">
                  {images.map((image, index) => (
                    <div
                      key={image.id}
                      className={`w-16 h-16 relative cursor-pointer border-2 transition-all duration-200 flex-shrink-0 ${
                        index === currentIndex 
                          ? 'border-white scale-110' 
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                      onClick={() => {
                        setCurrentIndex(index);
                        setSelectedImage(image);
                      }}
                    >
                      <Image
                        src={image.thumb}
                        alt={image.alt}
                        fill
                        className="object-cover rounded"
                        sizes="64px"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = image.src;
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Instructions */}
          <div className={`${galleryBg} ${galleryBorder} border p-4 rounded-lg text-center`}>
            <p className={`${captionColor} text-sm`}>
              Klikk på bildene for å se dem i full størrelse. 
              {images.length > 1 && ' Bruk piltastene eller knappene for å navigere.'}
            </p>
            <p className={`${captionColor} text-xs mt-2`}>
              Fant {images.length} bilde{images.length !== 1 ? 'r' : ''} i galleriet
            </p>
          </div>
        </>
      )}
    </section>
  );
}