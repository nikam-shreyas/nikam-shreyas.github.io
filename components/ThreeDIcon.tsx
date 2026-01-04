import React from 'react';

interface ThreeDIconProps {
  icon: React.ReactNode;
  href?: string;
  color: string;
  label?: string;
  className?: string;
}

export const ThreeDIcon: React.FC<ThreeDIconProps> = ({ icon, href, color, label, className }) => {
  // Determine if this is a link or a static container
  const isLink = Boolean(href);
  const Component = isLink ? 'a' : 'div';
  
  const linkProps = isLink ? {
    href,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": label
  } : {};

  return (
    <Component 
      {...linkProps}
      // Added 'group/icon' to scope the hover effect specifically to this component
      className={`group/icon relative block w-14 h-14 md:w-16 md:h-16 ${isLink ? 'cursor-pointer' : 'cursor-default'} ${className || ''}`}
    >
      {/* 
        1. Base Shadow Layer (Dark Grey) 
        Uses group-hover/icon to only react to this specific group
      */}
      <div 
        className="absolute inset-0 rounded-xl bg-gray-800 transition-all duration-300 ease-out group-hover/icon:translate-x-1 group-hover/icon:translate-y-1 md:group-hover/icon:translate-x-2 md:group-hover/icon:translate-y-2"
      />
      
      {/* 
        2. Colored Glow Layer 
      */}
      <div 
        className="absolute inset-0 rounded-xl transition-all duration-300 ease-out opacity-0 group-hover/icon:opacity-100 group-hover/icon:translate-x-1 group-hover/icon:translate-y-1 md:group-hover/icon:translate-x-2 md:group-hover/icon:translate-y-2"
        style={{ backgroundColor: color }}
      />

      {/* 
        3. Top Face Layer 
      */}
      <div className="absolute inset-0 flex items-center justify-center bg-black border border-gray-800 rounded-xl transition-all duration-300 ease-out group-hover/icon:-translate-x-1 group-hover/icon:-translate-y-1 md:group-hover/icon:-translate-x-2 md:group-hover/icon:-translate-y-2 z-10 group-hover/icon:border-gray-600">
        <div className="text-gray-400 transition-colors duration-300 group-hover/icon:text-white transform group-hover/icon:scale-110">
          {/* Clone the icon to apply sizing classes dynamically */}
          {React.isValidElement(icon) 
            ? React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-7 h-7 md:w-8 md:h-8" }) 
            : icon}
        </div>
      </div>
    </Component>
  );
};