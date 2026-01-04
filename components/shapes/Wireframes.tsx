import React from 'react';

interface ShapeProps {
  className?: string;
}

// Helper to ensure standard stroke properties
const SvgContainer: React.FC<{ children: React.ReactNode; className?: string; viewBox?: string }> = ({ 
  children, 
  className, 
  viewBox = "0 0 100 100" 
}) => (
  <svg 
    viewBox={viewBox} 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

export const Cube: React.FC<ShapeProps> = ({ className }) => (
  <SvgContainer className={className}>
    {/* Front Square */}
    <path d="M25,25 L75,25 L75,75 L25,75 L25,25" />
    {/* Back Square offset */}
    <path d="M40,10 L90,10 L90,60 L40,60 L40,10" />
    {/* Connecting Lines */}
    <path d="M25,25 L40,10" />
    <path d="M75,25 L90,10" />
    <path d="M75,75 L90,60" />
    <path d="M25,75 L40,60" />
  </SvgContainer>
);

export const Pyramid: React.FC<ShapeProps> = ({ className }) => (
  <SvgContainer className={className}>
    {/* Base */}
    <path d="M20,70 L80,70 L95,55 L35,55 L20,70" />
    {/* Edges to Apex */}
    <path d="M20,70 L50,10" />
    <path d="M80,70 L50,10" />
    <path d="M95,55 L50,10" />
    <path d="M35,55 L50,10" />
  </SvgContainer>
);

export const Cylinder: React.FC<ShapeProps> = ({ className }) => (
  <SvgContainer className={className}>
    {/* Top Ellipse */}
    <ellipse cx="50" cy="20" rx="30" ry="10" />
    {/* Bottom Ellipse (half visible usually, but wireframe shows all) */}
    <ellipse cx="50" cy="80" rx="30" ry="10" />
    {/* Sides */}
    <line x1="20" y1="20" x2="20" y2="80" />
    <line x1="80" y1="20" x2="80" y2="80" />
  </SvgContainer>
);

export const Sphere: React.FC<ShapeProps> = ({ className }) => (
  <SvgContainer className={className}>
    {/* Outer Circle */}
    <circle cx="50" cy="50" r="40" />
    {/* Horizontal Ellipse (Equator) */}
    <ellipse cx="50" cy="50" rx="40" ry="12" />
    {/* Vertical Ellipse (Meridian) */}
    <ellipse cx="50" cy="50" rx="12" ry="40" />
    {/* Angled Ellipse */}
    <ellipse cx="50" cy="50" rx="38" ry="38" transform="rotate(45 50 50) scale(1, 0.3)" />
  </SvgContainer>
);

export const GlobeWireframe: React.FC<ShapeProps> = ({ className }) => (
  <SvgContainer className={className}>
    <circle cx="50" cy="50" r="45" strokeWidth="1" />
    <ellipse cx="50" cy="50" rx="45" ry="18" transform="rotate(0 50 50)" />
    <ellipse cx="50" cy="50" rx="45" ry="18" transform="rotate(45 50 50)" />
    <ellipse cx="50" cy="50" rx="45" ry="18" transform="rotate(90 50 50)" />
    <ellipse cx="50" cy="50" rx="45" ry="18" transform="rotate(135 50 50)" />
  </SvgContainer>
);

export const EarthWireframe: React.FC<ShapeProps> = ({ className }) => {
  return (
    <svg 
        viewBox="0 0 100 100" 
        className={className} 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <defs>
            <clipPath id="earth-clip">
                <circle cx="50" cy="50" r="45" />
            </clipPath>
        </defs>

        {/* 1. Base Circle / Atmosphere (slightly filled) */}
        <circle cx="50" cy="50" r="45" fill="currentColor" fillOpacity="0.05" strokeWidth="1.5" />

        {/* 2. Rotating Elements (Grid + Continents) */}
        <g clipPath="url(#earth-clip)">
             <g className="animate-earth-rotate">
                 {/* Repeating group (Original + Duplicate for looping) */}
                 {[0, 150].map((offset) => (
                    <g key={offset} transform={`translate(${offset}, 0)`}>
                        {/* Grid Lines (Vertical for slider effect) */}
                        <g strokeOpacity="0.2" strokeWidth="0.5">
                            <line x1="0" y1="0" x2="0" y2="100" />
                            <line x1="25" y1="0" x2="25" y2="100" />
                            <line x1="50" y1="0" x2="50" y2="100" />
                            <line x1="75" y1="0" x2="75" y2="100" />
                            <line x1="100" y1="0" x2="100" y2="100" />
                            <line x1="125" y1="0" x2="125" y2="100" />
                        </g>
                        
                        {/* Abstract Continents (Polygons) */}
                        <g fill="currentColor" fillOpacity="0.15" stroke="none">
                            {/* N. America -ish */}
                            <path d="M 20 25 Q 35 15 50 25 T 60 40 T 50 55 T 30 50 T 20 25 Z" />
                            {/* S. America -ish */}
                            <path d="M 40 60 Q 55 60 60 70 T 50 90 T 40 80 T 40 60 Z" />
                            {/* Europe/Africa -ish */}
                            <path d="M 75 20 Q 90 15 100 25 T 100 50 T 90 70 T 70 60 T 75 40 T 75 20 Z" />
                            {/* Asia -ish */}
                            <path d="M 110 20 Q 130 15 140 25 T 145 50 T 130 60 T 110 50 T 110 20 Z" />
                        </g>
                    </g>
                 ))}
             </g>
        </g>

        {/* 3. Static Spherical Overlay Lines (Latitudes) to give 3D volume */}
        <g strokeOpacity="0.2" strokeWidth="0.5" clipPath="url(#earth-clip)">
             {/* Equator */}
             <line x1="5" y1="50" x2="95" y2="50" />
             {/* Tropics */}
             <path d="M 5 35 Q 50 45 95 35" fill="none" />
             <path d="M 5 65 Q 50 55 95 65" fill="none" />
             {/* Polar Circles */}
             <path d="M 15 20 Q 50 28 85 20" fill="none" />
             <path d="M 15 80 Q 50 72 85 80" fill="none" />
        </g>
        
        {/* 4. Gloss / Highlight for aesthetic */}
        <path d="M 60 10 A 40 40 0 0 1 90 40" strokeOpacity="0.3" strokeWidth="1" fill="none" />
    </svg>
  );
};

export const Icosahedron: React.FC<ShapeProps> = ({ className }) => (
  <SvgContainer className={className}>
    {/* Simplified Geometric Form */}
    <path d="M50,5 L90,30 L90,70 L50,95 L10,70 L10,30 Z" />
    <path d="M50,5 L50,50 L90,70" />
    <path d="M50,50 L10,70" />
    <path d="M10,30 L50,50 L90,30" />
    <path d="M50,95 L50,50" />
  </SvgContainer>
);

export const Hourglass: React.FC<ShapeProps> = ({ className }) => (
    <SvgContainer className={className}>
        {/* Top Triangle */}
        <path d="M20,20 L80,20 L50,50 Z" />
        {/* Bottom Triangle */}
        <path d="M50,50 L20,80 L80,80 Z" />
        {/* Top Ellipse Rim */}
        <ellipse cx="50" cy="20" rx="30" ry="8" />
        {/* Bottom Ellipse Rim */}
        <ellipse cx="50" cy="80" rx="30" ry="8" />
    </SvgContainer>
);