import React from "react";

const SwapButton: React.FC<React.PropsWithChildren<{
  onClick: () => void;
  disabled?: boolean;
}>> = ({ onClick, disabled = false, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 bg-pink-200 text-pink-600 font-medium rounded-lg transition ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-pink-300"
      }`}
    >
      {children}
    </button>
  );
};

export default SwapButton;
