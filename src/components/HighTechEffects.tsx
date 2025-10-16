import React from 'react';

const HighTechEffects: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Energy Lines */}
      <div className="energy-lines">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="energy-line"
            style={{
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Circuit Pattern */}
      <div className="circuit-pattern">
        <svg className="circuit-svg" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="circuit-lines" opacity="0.1">
            {/* Horizontal lines */}
            <line x1="0" y1="200" x2="1920" y2="200" stroke="#FF6906" strokeWidth="1"/>
            <line x1="0" y1="400" x2="1920" y2="400" stroke="#FF6906" strokeWidth="1"/>
            <line x1="0" y1="600" x2="1920" y2="600" stroke="#FF6906" strokeWidth="1"/>
            <line x1="0" y1="800" x2="1920" y2="800" stroke="#FF6906" strokeWidth="1"/>
            
            {/* Vertical lines */}
            <line x1="300" y1="0" x2="300" y2="1080" stroke="#FF6906" strokeWidth="1"/>
            <line x1="600" y1="0" x2="600" y2="1080" stroke="#FF6906" strokeWidth="1"/>
            <line x1="900" y1="0" x2="900" y2="1080" stroke="#FF6906" strokeWidth="1"/>
            <line x1="1200" y1="0" x2="1200" y2="1080" stroke="#FF6906" strokeWidth="1"/>
            <line x1="1500" y1="0" x2="1500" y2="1080" stroke="#FF6906" strokeWidth="1"/>
            
            {/* Circuit nodes */}
            <circle cx="300" cy="200" r="3" fill="#FF6906"/>
            <circle cx="600" cy="400" r="3" fill="#FF6906"/>
            <circle cx="900" cy="600" r="3" fill="#FF6906"/>
            <circle cx="1200" cy="800" r="3" fill="#FF6906"/>
            <circle cx="1500" cy="200" r="3" fill="#FF6906"/>
          </g>
        </svg>
      </div>
      
      {/* Glowing Orbs */}
      <div className="glowing-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>
      
      {/* Data Stream */}
      <div className="data-stream">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="data-bit"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${1.5 + Math.random() * 1}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighTechEffects;
