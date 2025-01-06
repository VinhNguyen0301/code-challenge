const TokenSelector: React.FC<{
    selected: string;
    onSelect: (token: string) => void;
  }> = ({ selected, onSelect }) => {
    return (
      <div className="flex items-center gap-2">
        <img
          src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${selected}.svg`}
          alt={selected}
          className="w-6 h-6"
        />
        <span className="text-gray-800 font-medium">{selected}</span>
        <button className="ml-2 text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    );
  };
  
  export default TokenSelector;
  