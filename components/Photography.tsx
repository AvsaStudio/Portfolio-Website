
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useCallback } from 'react';
import { CameraIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';

interface Photo {
  id: string;
  url: string;
  isDeveloping: boolean;
  timestamp: number;
}

export const Photography: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      const newPhoto: Photo = {
        id: Math.random().toString(36).substring(7),
        url,
        isDeveloping: true,
        timestamp: Date.now()
      };
      
      setPhotos(prev => [newPhoto, ...prev]);

      // Simulate developing time
      setTimeout(() => {
        setPhotos(prev => prev.map(p => 
            p.id === newPhoto.id ? { ...p, isDeveloping: false } : p
        ));
      }, 3500); // 3.5s develop time
    }
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  return (
    <section id="photography" className="py-24 px-4 max-w-7xl mx-auto bg-zinc-950">
        <div className="flex flex-col items-center justify-center text-center mb-12">
            <CameraIcon className="w-10 h-10 text-red-600 mb-4" />
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-2 font-gemola">
                Digital Darkroom
            </h2>
            <p className="text-zinc-500 max-w-xl">
                A space for my visual work. Drag and drop your own raw files to "develop" them in the virtual tray, or view the archives.
            </p>
        </div>

        {/* Drop Zone / Tray */}
        <label 
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`
                relative w-full h-48 md:h-64 rounded-xl border-2 border-dashed transition-all duration-500 cursor-pointer
                flex flex-col items-center justify-center gap-4 mb-16 overflow-hidden group
                ${isDragging 
                    ? 'border-red-500 bg-red-900/10' 
                    : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/50'}
            `}
        >
            <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
            
            {/* Liquid animation effect for "tray" */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-900/0 via-red-900/0 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            <div className={`w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 shadow-xl transition-transform duration-300 ${isDragging ? 'scale-110 border-red-500/50' : 'group-hover:-translate-y-2'}`}>
                <ArrowUpTrayIcon className={`w-8 h-8 transition-colors ${isDragging ? 'text-red-500' : 'text-zinc-400'}`} />
            </div>
            <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Drop Negative Here to Develop</span>
        </label>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Interactive User Photos */}
            {photos.map((photo) => (
                <div key={photo.id} className="relative aspect-[4/5] bg-white p-3 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="w-full h-full bg-black overflow-hidden relative">
                        <img 
                            src={photo.url} 
                            alt="Developed" 
                            className={`
                                w-full h-full object-cover transition-all duration-[3500ms] ease-in-out
                                ${photo.isDeveloping ? 'blur-xl brightness-0 grayscale' : 'blur-0 brightness-100 grayscale-0'}
                            `}
                        />
                        {/* Developing Liquid Overlay */}
                        {photo.isDeveloping && (
                            <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay animate-pulse pointer-events-none"></div>
                        )}
                    </div>
                    {/* Polaroid Text */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-white flex items-center justify-center">
                        <span className="font-handwriting text-black/80 text-xs tracking-widest font-bold uppercase">
                            {photo.isDeveloping ? 'Developing...' : 'Developed Scan'}
                        </span>
                    </div>
                </div>
            ))}

            {/* Static/Default Gallery Items (CSS Generated for "No External Images" rule, but styled nicely) */}
            {[1, 2, 3].map((i) => (
                <div key={`static-${i}`} className="group relative aspect-[4/5] bg-[#121214] overflow-hidden cursor-crosshair border border-zinc-800">
                   {/* CSS Composition simulating abstract photography */}
                   <div className={`w-full h-full opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 ${
                       i === 1 ? 'bg-gradient-to-br from-blue-900 to-black' : 
                       i === 2 ? 'bg-gradient-to-tr from-purple-900 to-zinc-900' : 
                       'bg-gradient-to-bl from-emerald-900 to-black'
                   }`}>
                        {/* Abstract Shapes */}
                        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                   </div>
                   
                   {/* Overlay Info */}
                   <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                       <div className="text-white font-bold text-xl font-gemola tracking-wide">Studio Session 00{i}</div>
                       <div className="text-zinc-400 text-xs font-mono mt-1">ISO 400 • 35mm • f/1.8</div>
                   </div>
                </div>
            ))}
        </div>
    </section>
  );
};
