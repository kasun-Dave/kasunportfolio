const LightBulb = () => {
  return (
    <div className="lightbulb">
      <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Trophy */}
        {/* Cup body */}
        <path d="M40 30 Q35 50 35 60 L35 70 Q35 75 40 75 L80 75 Q85 75 85 70 L85 60 Q85 50 80 30 Z" fill="#FFD700" stroke="#1F1F1F" strokeWidth="2"/>
        
        {/* Cup shine */}
        <path d="M45 35 Q43 50 43 60 L43 68 Q43 70 45 70 L50 70 Q50 60 50 40 Z" fill="#FFF4A3" opacity="0.6"/>
        
        {/* Handles */}
        <path d="M35 35 Q25 35 25 45 Q25 55 35 55" stroke="#FFD700" strokeWidth="3" fill="none"/>
        <path d="M85 35 Q95 35 95 45 Q95 55 85 55" stroke="#FFD700" strokeWidth="3" fill="none"/>
        
        {/* Base stem */}
        <rect x="52" y="75" width="16" height="15" fill="#FFD700" stroke="#1F1F1F" strokeWidth="2"/>
        
        {/* Base platform */}
        <ellipse cx="60" cy="95" rx="25" ry="8" fill="#FFD700" stroke="#1F1F1F" strokeWidth="2"/>
        
        {/* Top rim */}
        <ellipse cx="60" cy="30" rx="20" ry="5" fill="#FFA500" stroke="#1F1F1F" strokeWidth="2"/>
        
        {/* Star on trophy */}
        <path d="M60 45 L62 52 L70 52 L64 57 L66 65 L60 60 L54 65 L56 57 L50 52 L58 52 Z" fill="#FFA500"/>
        
        {/* Sparkles */}
        <circle cx="25" cy="25" r="2" fill="#FFD700" opacity="0.8"/>
        <circle cx="95" cy="25" r="2" fill="#FFD700" opacity="0.8"/>
        <circle cx="20" cy="50" r="3" fill="#FFD700" opacity="0.6"/>
        <circle cx="100" cy="50" r="3" fill="#FFD700" opacity="0.6"/>
      </svg>
    </div>
  );
};

export default LightBulb;

