import React from 'react';

const AnimatedCar: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Car Animation */}
      <div className="car-container">
        <svg 
          className="car-svg" 
          viewBox="0 0 200 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Car Body */}
          <g className="car-body">
            <rect x="20" y="40" width="160" height="30" rx="15" fill="url(#carGradient)" opacity="0.8"/>
            <rect x="30" y="30" width="140" height="20" rx="10" fill="url(#carGradient)" opacity="0.6"/>
            
            {/* Windows */}
            <rect x="40" y="35" width="30" height="15" rx="5" fill="#FF6906" opacity="0.3"/>
            <rect x="130" y="35" width="30" height="15" rx="5" fill="#FF6906" opacity="0.3"/>
            
            {/* Wheels */}
            <circle cx="50" cy="70" r="12" fill="#000000" opacity="0.8"/>
            <circle cx="50" cy="70" r="8" fill="#FF6906" opacity="0.6"/>
            <circle cx="150" cy="70" r="12" fill="#000000" opacity="0.8"/>
            <circle cx="150" cy="70" r="8" fill="#FF6906" opacity="0.6"/>
            
            {/* Headlights */}
            <circle cx="25" cy="50" r="4" fill="#FFFFFF" opacity="0.9"/>
            <circle cx="175" cy="50" r="4" fill="#FFFFFF" opacity="0.9"/>
          </g>
          
          {/* Speed Lines */}
          <g className="speed-lines">
            <line x1="0" y1="20" x2="50" y2="20" stroke="#FF6906" strokeWidth="2" opacity="0.6"/>
            <line x1="0" y1="30" x2="40" y2="30" stroke="#FF6906" strokeWidth="2" opacity="0.4"/>
            <line x1="0" y1="40" x2="60" y2="40" stroke="#FF6906" strokeWidth="2" opacity="0.5"/>
            <line x1="0" y1="50" x2="35" y2="50" stroke="#FF6906" strokeWidth="2" opacity="0.3"/>
            <line x1="0" y1="60" x2="45" y2="60" stroke="#FF6906" strokeWidth="2" opacity="0.4"/>
            <line x1="0" y1="70" x2="55" y2="70" stroke="#FF6906" strokeWidth="2" opacity="0.6"/>
            <line x1="0" y1="80" x2="30" y2="80" stroke="#FF6906" strokeWidth="2" opacity="0.3"/>
          </g>
          
          <defs>
            <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#FF6906', stopOpacity: 0.8}} />
              <stop offset="50%" style={{stopColor: '#FFFFFF', stopOpacity: 0.6}} />
              <stop offset="100%" style={{stopColor: '#FF6906', stopOpacity: 0.8}} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Multiple Cars for depth */}
      <div className="car-container car-2">
        <svg 
          className="car-svg" 
          viewBox="0 0 150 75" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="car-body">
            <rect x="15" y="30" width="120" height="22" rx="11" fill="#FF6906" opacity="0.4"/>
            <rect x="22" y="22" width="106" height="15" rx="7" fill="#FF6906" opacity="0.3"/>
            <circle cx="40" cy="52" r="9" fill="#000000" opacity="0.6"/>
            <circle cx="110" cy="52" r="9" fill="#000000" opacity="0.6"/>
            <circle cx="20" cy="40" r="3" fill="#FFFFFF" opacity="0.7"/>
            <circle cx="130" cy="40" r="3" fill="#FFFFFF" opacity="0.7"/>
          </g>
        </svg>
      </div>
      
      <div className="car-container car-3">
        <svg 
          className="car-svg" 
          viewBox="0 0 100 50" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="car-body">
            <rect x="10" y="20" width="80" height="15" rx="7" fill="#FF6906" opacity="0.2"/>
            <circle cx="30" cy="35" r="6" fill="#000000" opacity="0.4"/>
            <circle cx="70" cy="35" r="6" fill="#000000" opacity="0.4"/>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedCar;
