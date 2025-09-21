import React from 'react'

function InputCard(
    {
        label,
        amount,
        onAmtChange,
        defaultCurrency = 'usd',
        onCurrChange,
        className = '',
        currencyOptions = [],
        amtDisabled = false,
        currDisabled = false,
    }) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
            <div className='w-1/2 '>
                <label className='text-black mb-2 inline-block'>{label}</label>
                <input
                    type="number"
                    className='outline-none w-full bg-transparent py-1.5'
                    placeholder={amount}
                    disabled={amtDisabled}
                    value={amount}
                    onChange={(e) => onAmtChange && onAmtChange(Number(e.target.value))}
                
                    >
                    </input>
                    <div className='w-1/2 flex flex-wrap justify-end text-right'>
                        <p className='text-black mb-2 w-full'>
                           Currency Type
                        </p>
                        <select
                         className='px-2 py-1 rounded-lg outline-none bg-gray cursor-pointer'
                            value={defaultCurrency}
                            onChange={(e) => onCurrChange && onCurrChange(e.target.value)}
                            disabled={currDisabled}
                        >
                        {currencyOptions.map((curr)=>(
                            <option key={curr} value={curr}>
                                {curr}
                            </option>
                        ))}
                            
                        </select>
                    </div>
            </div>

        </div>
    )
}

export default InputCard