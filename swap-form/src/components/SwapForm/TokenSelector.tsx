const TokenSelector: React.FC<{
    selected: string;
    onSelect: (token: string) => void;
  }> = ({ selected, onSelect }) => {
    return (
      <div className=" w-full flex justify-end space-x-4 gap-2 rounded-full bg-white">
        <div className="w-auto">
        <img
          src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${selected}.svg`}
          alt={selected}
          className="w-6 h-6"
        />
        </div>
       
        <span className="text-gray-800 font-medium w-auto">{selected}</span>
        <button className="ml-2 text-gray-500 w-auto">
          <svg className="w4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    );
  };
  
  export default TokenSelector;
  