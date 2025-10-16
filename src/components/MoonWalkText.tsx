import React from 'react';

interface MoonWalkTextProps {
  children: string;
  className?: string;
}

const MoonWalkText: React.FC<MoonWalkTextProps> = ({ children, className = '' }) => {
  const renderText = (text: string): React.ReactNode[] => {
    return text.split('').map((char, index) => {
      if (char === 'A' || char === 'a') {
        return (
          <span key={index} className="relative inline-block">
            <span className="relative z-10">{char}</span>
            <span className="absolute top-1/2 left-0 right-0 h-0.5 bg-transparent transform -translate-y-1/2"></span>
          </span>
        );
      }
      return <span key={index}>{char}</span>;
    });
  };

  return (
    <span className={`moonwalk-text ${className}`}>
      {renderText(children)}
    </span>
  );
};

export default MoonWalkText;
