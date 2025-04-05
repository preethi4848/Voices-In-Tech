
const WeCodedLogo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M25 20L15 50L25 80" stroke="#4531EA" strokeWidth="5" strokeLinecap="round" />
      <path d="M45 20L35 50L45 80" stroke="#4531EA" strokeWidth="5" strokeLinecap="round" />
      <path d="M75 20L85 50L75 80" stroke="#9D00E5" strokeWidth="5" strokeLinecap="round" />
      <path d="M55 20L65 50L55 80" stroke="#9D00E5" strokeWidth="5" strokeLinecap="round" />
      <path d="M20 50H80" stroke="#CCEA71" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
};

export default WeCodedLogo;
