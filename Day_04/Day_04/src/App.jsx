import { useState } from 'react'

import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo.js';
import { InputCard } from './components/index.js';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmt, setConvertedAmt] = useState(0);

  const convetedCurrInfo = useCurrencyInfo(from);
  const options = Object.keys(convetedCurrInfo)

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmt(amount)
    setAmount(convertedAmt)
  }

  const convert = () => {
    setConvertedAmt((amount * convetedCurrInfo[to]).toFixed(2));
  }


  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat  bg-[url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")]'>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-white/80 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            <div className='w-full mb-1'>
              <InputCard
                label="From"
                amount={amount}
                onAmtChange={(amt) => setAmount(amt)}
                defaultCurrency={from}
                onCurrChange={(curr) => setFrom(curr)}
                currencyOptions={options}
              />

            </div>
            <div className='relative w-full h-0.5'>
              <button type='button' onClick={swap} className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md
             bg-blue-600 hover:bg-blue-700 text-white px-2 py-0.5'>
                Swap
              </button>
            </div>
            <div className='w-full mb-1'>
              <InputCard
                label="To"
                amount={convertedAmt}
                onAmtChange={(amt) => setConvertedAmt(amt)}
                defaultCurrency={to}
                onCurrChange={(curr) => setTo(curr)}
                currencyOptions={options}
                amtDisabled
              />
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white rounded-lg py-3 px-4 hover:bg-blue-700 transition-colors'>
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
