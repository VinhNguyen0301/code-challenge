import React, { useState } from 'react'
import AmountInput from '../../components/SwapForm/AmountInput'
import TokenSelector from '../../components/SwapForm/TokenSelector'

const Card = () => {
    const [sellAmount, setSellAmount] = useState("");
  const [sellToken, setSellToken] = useState("ZRX");

  return (
    <div className="w-full h-auto rounded-2xl bg-gray-100 p-4">
        <div className="left-4 block text-gray-500 text-sm font-medium mb-1">Sell</div>
        <div className="flex items-center justify-between py-3 rounded-lg gap-4">
            <div className='flex-2 basic-2/3'>
          <AmountInput value={sellAmount} onChange={setSellAmount} placeholder="0.00" />
            </div>
            <div className='flex-1 basic-1/3 max-w-[7rem]'>   
          <TokenSelector selected={sellToken} onSelect={setSellToken} />
            </div>
        </div>
        <span className="block text-gray-400 text-sm mt-2">$5.36</span>
    </div>
  )
}

export default Card