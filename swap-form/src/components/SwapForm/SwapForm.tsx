import React, { useState } from "react";
import TokenSelector from "./TokenSelector";
import AmountInput from "./AmountInput";
import SwapButton from "./SwapButton";
import Card from "../../design/Card/Card";

const SwapForm: React.FC = () => {
  
  const [buyAmount, setBuyAmount] = useState("");
  const [buyToken, setBuyToken] = useState("AAVE");

  const handleSwap = () => {
    // console.log("Swap initiated:", { sellAmount, sellToken, buyAmount, buyToken });
  };

  return (
    <div>
      <div className="font-popi text-3xl text-center">Swap Everything</div>
    <div className="w-[30rem] max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg">
      {/* Sell Section */}
      <div className="mb-4">
        <Card />
      </div>

      {/* Swap Icon */}
      <div className="flex justify-center items-center my-4">
        <button
          className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow-md"
        //   onClick={() => {
        //     // Swap sell and buy tokens
        //     setSellToken(buyToken);
        //     setBuyToken(sellToken);
        //   }}
        >
          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 10l5-5 5 5H7zm0 4h10l-5 5-5-5z" />
          </svg>
        </button>
      </div>

      {/* Buy Section */}
      <div className="mb-6">
        {/* <span className="block text-gray-500 text-sm font-medium mb-1">Buy</span>
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
          <AmountInput value={buyAmount} onChange={setBuyAmount} placeholder="0.00" />
          <TokenSelector selected={buyToken} onSelect={setBuyToken} />
        </div>
        <span className="block text-gray-400 text-sm mt-2">$5.33</span> */}
        <Card />
      </div>

      {/* Swap Button */}
      <SwapButton onClick={handleSwap}>Get started</SwapButton>
    </div>
    </div>
  );
};

export default SwapForm;
