
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect, useRef } from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

export const Hero: React.FC = () => {
  const fontStack = '"the-seasons", "The Seasons", "Bodoni Moda", serif';
  
  // Mouse interaction state for 3D rotation
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const { width, height, left, top } = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    // Normalize and scale
    setMouse({ 
        x: (x / width) * 20, // Max 20deg rotation
        y: (y / height) * -20 
    });
  };

  return (
    <section 
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 overflow-hidden bg-[#050505]"
    >
      
      {/* Dark Atmosphere & Grid */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.07]" 
               style={{backgroundImage: 'radial-gradient(#a1a1aa 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.03),_transparent_70%)]"></div>
      </div>

      {/* 3D Camera Scene - Replaces Mercury Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0 perspective-container">
          <div 
            className="camera-assembly"
            style={{
                transform: `rotateX(${10 + mouse.y}deg) rotateY(${mouse.x}deg)`
            }}
          >
              {/* --- LENS ASSEMBLY (Moves Forward) --- */}
              <div className="part-group lens-assembly" style={{'--explode-z': '120px'} as React.CSSProperties}>
                  {/* Glass Element */}
                  <div className="lens-glass">
                      <div className="reflection"></div>
                  </div>
                  {/* Lens Rings */}
                  <div className="lens-barrel-outer"></div>
                  <div className="lens-barrel-inner"></div>
              </div>

              {/* --- FRONT BODY SHELL (Moves Forward Slightly) --- */}
              <div className="part-group body-front-group" style={{'--explode-z': '50px'} as React.CSSProperties}>
                   <div className="face front box-face"></div>
                   <div className="face top box-face"></div>
                   <div className="face bottom box-face"></div>
                   <div className="face left box-face"></div>
                   <div className="face right box-face"></div>
                   {/* Decorative Grip */}
                   <div className="grip-texture"></div>
              </div>

              {/* --- INTERNAL SENSOR & ELECTRONICS (Stays Center) --- */}
              <div className="part-group internals-group" style={{'--explode-z': '0px'} as React.CSSProperties}>
                  {/* The Sensor Chip */}
                  <div className="sensor-plate">
                      <div className="sensor-glass"></div>
                      <div className="circuit-lines"></div>
                  </div>
                  {/* Internal Frame */}
                  <div className="internal-frame"></div>
              </div>

              {/* --- VIEWFINDER PRISM (Moves Up) --- */}
              <div className="part-group prism-group" style={{'--explode-z': '0px', '--explode-y': '-60px'} as React.CSSProperties}>
                  <div className="prism-shape">
                      <div className="prism-face p-front">AVSA</div>
                      <div className="prism-face p-back"></div>
                      <div className="prism-face p-left"></div>
                      <div className="prism-face p-right"></div>
                      <div className="prism-face p-top"></div>
                  </div>
              </div>

              {/* --- BACK BODY & SCREEN (Moves Backward) --- */}
              <div className="part-group body-back-group" style={{'--explode-z': '-60px'} as React.CSSProperties}>
                   <div className="face back box-face">
                       {/* LCD Screen */}
                       <div className="lcd-screen">
                            <div className="grid-overlay"></div>
                            <div className="data-overlay">
                                <span>ISO 400</span>
                                <span>1/2000</span>
                                <span>f/1.8</span>
                            </div>
                       </div>
                       {/* Buttons */}
                       <div className="btn btn-1"></div>
                       <div className="btn btn-2"></div>
                       <div className="btn btn-3"></div>
                   </div>
                   <div className="face top box-face"></div>
                   <div className="face bottom box-face"></div>
                   <div className="face left box-face"></div>
                   <div className="face right box-face"></div>
              </div>
          </div>
      </div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center text-center space-y-8 max-w-5xl w-full mix-blend-hard-light">
        
        {/* Status Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-zinc-100/5 border border-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-transform hover:scale-105 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-200"></span>
            </span>
            <span className="text-xs font-mono text-zinc-300 tracking-widest uppercase">Open to Work</span>
        </div>

        {/* Animated Name SVG */}
        <div className="relative w-full max-w-[95vw] md:max-w-6xl overflow-visible -my-8">
            <svg viewBox="0 0 800 300" className="w-full h-auto drop-shadow-2xl">
                <defs>
                    <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="50%" stopColor="#d4d4d8" />
                        <stop offset="100%" stopColor="#a1a1aa" />
                    </linearGradient>
                </defs>
                
                <text 
                    x="50%" y="35%" textAnchor="middle" 
                    className="text-[4.5rem] md:text-[6rem] tracking-tighter uppercase"
                    style={{ fontFamily: fontStack, stroke: '#e4e4e7', fill: 'transparent', strokeWidth: '0.5px', animation: 'drawName 1.2s ease-out forwards' }}
                >Salome</text>
                 <text 
                    x="50%" y="35%" textAnchor="middle" 
                    className="text-[4.5rem] md:text-[6rem] tracking-tighter uppercase"
                    style={{ fontFamily: fontStack, fill: 'url(#silverGradient)', fillOpacity: 0, stroke: 'none', animation: 'fillName 0.8s ease-out 1s forwards' }}
                >Salome</text>

                 <text 
                    x="50%" y="58%" textAnchor="middle" 
                    className="text-[2.5rem] md:text-[3.5rem] tracking-[0.3em] uppercase"
                    style={{ fontFamily: fontStack, stroke: '#a1a1aa', fill: 'transparent', strokeWidth: '0.5px', animation: 'drawName 1.2s ease-out 0.6s forwards' }}
                >Avsa</text>
                <text 
                    x="50%" y="58%" textAnchor="middle" 
                    className="text-[2.5rem] md:text-[3.5rem] tracking-[0.3em] uppercase"
                    style={{ fontFamily: fontStack, fill: 'url(#silverGradient)', fillOpacity: 0, stroke: 'none', animation: 'fillName 0.8s ease-out 1.6s forwards' }}
                >Avsa</text>

                <text 
                    x="50%" y="85%" textAnchor="middle" 
                    className="text-[4.5rem] md:text-[6rem] tracking-tighter uppercase"
                    style={{ fontFamily: fontStack, stroke: '#e4e4e7', fill: 'transparent', strokeWidth: '0.5px', animation: 'drawName 1.2s ease-out 1.2s forwards' }}
                >Miller</text>
                <text 
                    x="50%" y="85%" textAnchor="middle" 
                    className="text-[4.5rem] md:text-[6rem] tracking-tighter uppercase"
                    style={{ fontFamily: fontStack, fill: 'url(#silverGradient)', fillOpacity: 0, stroke: 'none', animation: 'fillName 0.8s ease-out 2.2s forwards' }}
                >Miller</text>
            </svg>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-lg md:text-2xl font-normal text-zinc-400 tracking-wide" style={{fontFamily: fontStack}}>
            <span className="hover:text-zinc-200 transition-colors cursor-pointer">Software Engineer</span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
            <span className="hover:text-zinc-200 transition-colors cursor-pointer">Brand Developer</span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
            <span className="hover:text-zinc-200 transition-colors cursor-pointer">Visual Artist</span>
        </div>

        <p className="text-zinc-500 max-w-2xl text-base md:text-lg leading-relaxed px-4 font-light" style={{fontFamily: 'Inter, sans-serif'}}>
          Merging technical precision with fluid aesthetics. <br className="hidden md:block"/>
          Specializing in full-stack applications, interactive tools, and brand strategy.
        </p>

        <div className="flex flex-wrap gap-4 pt-8">
            <a href="#projects" className="group relative px-8 py-4 bg-zinc-100 text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                <span className="relative z-10 tracking-wide" style={{fontFamily: fontStack}}>View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-300 via-white to-zinc-300 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent border border-zinc-700 text-zinc-300 font-medium rounded-full hover:bg-zinc-900/50 backdrop-blur-md transition-all hover:border-zinc-400 hover:text-white tracking-wide" style={{fontFamily: fontStack}}>
                Contact Me
            </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-600 z-20">
        <ArrowDownIcon className="w-6 h-6" />
      </div>
      
      <style>{`
        @keyframes drawName { to { stroke-dashoffset: 0; } }
        @keyframes fillName { to { fill-opacity: 1; } }

        /* --- 3D CAMERA CSS --- */
        .perspective-container {
            perspective: 1000px;
        }
        
        /* Main Container that rotates on auto-loop + mouse interaction */
        .camera-assembly {
            position: relative;
            width: 300px;
            height: 200px;
            transform-style: preserve-3d;
            transition: transform 0.1s ease-out;
            /* Add a slow subtle idle spin on top of mouse */
            animation: idle-spin 20s ease-in-out infinite alternate;
        }
        @keyframes idle-spin {
            from { rotate: y -10deg; }
            to { rotate: y 10deg; }
        }

        /* PART GROUPS: Hold the geometry and handle the Explosion Animation */
        .part-group {
            position: absolute;
            inset: 0;
            transform-style: preserve-3d;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: explode-loop 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes explode-loop {
            0%, 10%, 90%, 100% { 
                transform: translate3d(0, 0, 0); 
            }
            40%, 60% { 
                /* Use CSS var for dynamic distance per part */
                transform: translate3d(0, var(--explode-y, 0px), var(--explode-z, 0px)); 
            }
        }

        /* --- GEOMETRY CONSTRUCTION --- */
        
        /* Generic Box Face Utilities */
        .box-face {
            position: absolute;
            backface-visibility: hidden; /* Hides inside to prevent glitching, or keep visible for "guts" */
            backface-visibility: visible;
            border: 1px solid rgba(255,255,255,0.1);
        }
        
        /* BODY SIZING */
        .body-front-group .face, .body-back-group .face {
            background: linear-gradient(135deg, #18181b 0%, #09090b 100%); /* Zinc 900/950 */
            box-shadow: inset 0 0 20px rgba(0,0,0,0.8);
        }
        
        /* Dimensions: Width 300, Height 180, Depth 60 (split into front/back 30 each) */
        .face.front, .face.back { width: 300px; height: 180px; }
        .face.top, .face.bottom { width: 300px; height: 40px; }
        .face.left, .face.right { width: 40px; height: 180px; }

        /* Front Box Positioning */
        .body-front-group .face.front { transform: translateZ(20px); }
        .body-front-group .face.back  { transform: translateZ(-20px) rotateY(180deg); display: none; /* Open back */ }
        .body-front-group .face.top   { transform: rotateX(90deg) translateZ(20px); height: 40px; }
        .body-front-group .face.bottom{ transform: rotateX(-90deg) translateZ(160px); height: 40px; }
        .body-front-group .face.left  { transform: rotateY(-90deg) translateZ(20px); width: 40px; }
        .body-front-group .face.right { transform: rotateY(90deg) translateZ(280px); width: 40px; }

        /* Grip Texture */
        .grip-texture {
            position: absolute;
            left: 20px; top: 20px; bottom: 20px; width: 60px;
            background: repeating-linear-gradient(45deg, #27272a, #27272a 2px, #18181b 2px, #18181b 4px);
            transform: translateZ(21px); /* Sit slightly above front face */
            border-radius: 4px;
        }

        /* Back Box Positioning (Mirrored) */
        .body-back-group .face.front  { transform: translateZ(20px); display: none; /* Open front */ }
        .body-back-group .face.back   { transform: translateZ(-20px) rotateY(180deg); }
        .body-back-group .face.top    { transform: rotateX(90deg) translateZ(20px); height: 40px; }
        .body-back-group .face.bottom { transform: rotateX(-90deg) translateZ(160px); height: 40px; }
        .body-back-group .face.left   { transform: rotateY(-90deg) translateZ(20px); width: 40px; }
        .body-back-group .face.right  { transform: rotateY(90deg) translateZ(280px); width: 40px; }

        /* LCD Screen on Back */
        .lcd-screen {
            position: absolute;
            top: 30px; left: 40px; right: 40px; bottom: 30px;
            background: #000;
            border: 2px solid #3f3f46;
            transform: translateZ(0.5px) rotateY(180deg); /* On back face */
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        .grid-overlay {
            position: absolute;
            inset: 0;
            background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
            background-size: 20px 20px;
        }
        .data-overlay {
            font-family: monospace;
            color: #00ff9d;
            font-size: 10px;
            display: flex;
            gap: 10px;
            z-index: 10;
        }
        
        /* Buttons */
        .btn { position: absolute; width: 12px; height: 12px; border-radius: 50%; background: #52525b; transform: translateZ(1px) rotateY(180deg); }
        .btn-1 { top: 10px; right: 20px; }
        .btn-2 { top: 10px; right: 40px; }
        .btn-3 { top: 10px; right: 60px; }

        /* --- LENS --- */
        .lens-glass {
            width: 120px; height: 120px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), rgba(0,0,0,0.8));
            border: 1px solid rgba(255,255,255,0.3);
            transform: translateZ(60px); /* Front of lens stack */
            box-shadow: 0 0 30px rgba(100, 200, 255, 0.1);
        }
        .reflection {
            position: absolute;
            top: 20%; left: 20%; width: 30%; height: 20%;
            background: rgba(255,255,255,0.4);
            filter: blur(8px);
            transform: skewX(-20deg);
            border-radius: 50%;
        }
        /* Simple Cylinder Approximations using thick borders or multiple divs is expensive in CSS. 
           We use stacked circles with borders for the "barrel" look */
        .lens-barrel-outer {
            position: absolute;
            width: 130px; height: 130px;
            border-radius: 50%;
            border: 15px solid #18181b; /* Thick wall */
            border-top-color: #27272a;
            transform: translateZ(30px);
            box-shadow: inset 0 0 20px #000;
        }
        .lens-barrel-inner {
            position: absolute;
            width: 110px; height: 110px;
            border-radius: 50%;
            border: 2px dashed #52525b; /* Focus ring texture */
            transform: translateZ(45px);
        }

        /* --- INTERNALS (SENSOR) --- */
        .sensor-plate {
            width: 80px; height: 60px;
            background: #0f172a;
            border: 1px solid #3b82f6;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
            background: repeating-linear-gradient(45deg, #0f172a, #0f172a 5px, #1e293b 5px, #1e293b 10px);
        }
        .sensor-glass {
            width: 50px; height: 35px;
            background: linear-gradient(135deg, #4f46e5, #06b6d4); /* Iridescent sensor look */
        }
        .internal-frame {
            position: absolute;
            width: 280px; height: 160px;
            border: 4px solid #3f3f46;
            transform: translateZ(0);
        }

        /* --- PRISM (Top Pyramid) --- */
        .prism-group { top: -90px; } /* Start position relative to center */
        .prism-shape {
            position: relative;
            width: 100px; height: 60px;
            transform-style: preserve-3d;
        }
        .prism-face {
            position: absolute;
            background: #18181b;
            border: 1px solid rgba(255,255,255,0.1);
        }
        .p-front { width: 100px; height: 40px; transform: translateZ(30px) rotateX(-30deg); color: #71717a; font-size: 10px; display: flex; justify-content: center; align-items: center; letter-spacing: 2px; font-weight: bold;}
        .p-back { width: 100px; height: 40px; transform: translateZ(-30px) rotateX(30deg); }
        .p-bottom { width: 100px; height: 60px; transform: rotateX(-90deg) translateZ(20px); }
        .p-left { width: 60px; height: 50px; transform: rotateY(-90deg) rotateX(30deg) translateZ(50px); opacity: 0; } /* complex shape simplification */

      `}</style>
    </section>
  );
};
