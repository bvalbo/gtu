import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface GalleryImage {
  id: string;
  src: string;
  thumb: string;
  alt: string;
  caption: string;
}

// Støttede bildeformater
const supportedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), 'public');
    const fullImagesDir = path.join(publicDir, 'images', 'gallery', 'full');
    const thumbsDir = path.join(publicDir, 'images', 'gallery', 'thumbs');
    
    // Sjekk om mappene eksisterer
    if (!fs.existsSync(fullImagesDir)) {
      return NextResponse.json({ images: [], error: 'Full images directory not found' });
    }
    
    if (!fs.existsSync(thumbsDir)) {
      return NextResponse.json({ images: [], error: 'Thumbnails directory not found' });
    }
    
    // Les alle filer i full-mappen
    const fullFiles = fs.readdirSync(fullImagesDir);
    
    // Filtrer kun bildefiler
    const imageFiles = fullFiles.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return supportedExtensions.includes(ext);
    });
    
    // Sorter alfabetisk
    imageFiles.sort();
    
    // Opprett galleri-objekter
    const galleryImages: GalleryImage[] = [];
    
    for (const file of imageFiles) {
      const fileNameWithoutExt = path.parse(file).name;
      const ext = path.extname(file);
      
      // Sjekk om tilsvarende thumbnail eksisterer
      const thumbPath = path.join(thumbsDir, file);
      const thumbExists = fs.existsSync(thumbPath);
      
      // Opprett bildeobjekt
      const image: GalleryImage = {
        id: fileNameWithoutExt,
        src: `/images/gallery/full/${file}`,
        thumb: thumbExists ? `/images/gallery/thumbs/${file}` : `/images/gallery/full/${file}`,
        alt: generateAltText(fileNameWithoutExt),
        caption: generateCaption(fileNameWithoutExt, file)
      };
      
      galleryImages.push(image);
    }
    
    return NextResponse.json({ 
      images: galleryImages,
      count: galleryImages.length,
      message: galleryImages.length > 0 ? 'Images loaded successfully' : 'No images found'
    });
    
  } catch (error) {
    console.error('Error reading gallery images:', error);
    return NextResponse.json({ 
      images: [], 
      error: 'Failed to read gallery images',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// Generer alt-tekst basert på filnavn
function generateAltText(fileName: string): string {
  // Konverter filnavn til lesbar tekst
  const readable = fileName
    .replace(/[-_]/g, ' ')
    .replace(/\d+/g, match => ` ${match} `)
    .replace(/\s+/g, ' ')
    .trim();
  
  return `Bilde fra Grimstad Terrengultraløp: ${readable}`;
}

// Generer caption basert på filnavn og posisjon
function generateCaption(fileName: string, originalFile: string): string {
  // Forsøk å lage en beskrivende caption basert på filnavn
  const lowerFileName = fileName.toLowerCase();
  
  // Spesielle nøkkelord som kan gi hints om innholdet
  if (lowerFileName.includes('start')) {
    return 'Ved startområdet';
  } else if (lowerFileName.includes('finish') || lowerFileName.includes('maal') || lowerFileName.includes('mål')) {
    return 'I målområdet';
  } else if (lowerFileName.includes('sti') || lowerFileName.includes('trail') || lowerFileName.includes('path')) {
    return 'På stien gjennom skogen';
  } else if (lowerFileName.includes('utsikt') || lowerFileName.includes('view') || lowerFileName.includes('landscape')) {
    return 'Utsikt fra løypen';
  } else if (lowerFileName.includes('gruppe') || lowerFileName.includes('group') || lowerFileName.includes('team')) {
    return 'Løpergruppe underveis';
  } else if (lowerFileName.includes('drikke') || lowerFileName.includes('water') || lowerFileName.includes('aid')) {
    return 'Ved drikkestasjon';
  } else if (lowerFileName.includes('etter') || lowerFileName.includes('after') || lowerFileName.includes('sosial')) {
    return 'Sosialt samvær etter løpet';
  } else if (lowerFileName.includes('vinner') || lowerFileName.includes('winner') || lowerFileName.includes('første')) {
    return 'Vinnere og toppresultater';
  } else {
    // Standard caption med filnavn som fallback
    const readableName = fileName
      .replace(/[-_]/g, ' ')
      .replace(/\d+/g, match => ` ${match} `)
      .replace(/\s+/g, ' ')
      .trim();
    
    return `Fra Grimstad Terrengultraløp (${readableName})`;
  }
}