const AmountInput: React.FC<{
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
  }> = ({ value, placeholder, onChange }) => {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-left text-xl font-semibold focus:outline-none"
      />
    );
  };
  
  export default AmountInput;
  