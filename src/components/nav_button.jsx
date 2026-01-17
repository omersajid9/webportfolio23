import React, { useState } from 'react';

const NavButton = ({ color, reference, icon, title, scrollToSection }) => {
  const [hover, setHover] = useState(false);
  
  // Map color names to Tailwind classes
  const colorClasses = {
    'section-home': 'ring-section-home bg-section-home',
    'section-education': 'ring-section-education bg-section-education',
    'section-experience': 'ring-section-experience bg-section-experience',
    'section-applications': 'ring-section-applications bg-section-applications',
    'section-projects': 'ring-section-projects bg-section-projects',
    'section-publications': 'ring-section-publications bg-section-publications',
    'section-skills': 'ring-section-skills bg-section-skills',
  };
  
  const buttonClasses = colorClasses[color] || 'ring-gray-500 bg-gray-500/30';
  
  return (
    <div>
      <button 
        className={`btn-press text-sm md:text-base lg:text-2xl text-black ring-2 ${buttonClasses} shadow-inner shadow-black rounded-full py-1 cursor-pointer font-bold px-2 md:px-4 font-text border-b-0 border-black flex flex-row text-center items-center gap-2 overflow-hidden`}
        onClick={() => scrollToSection(reference)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {icon}
        {hover && (
          <div className='transition-all duration-300 ease-in-out hidden md:visible'>{title}</div>
        )}
        
      </button>
    </div>
  );
};

export default NavButton;

