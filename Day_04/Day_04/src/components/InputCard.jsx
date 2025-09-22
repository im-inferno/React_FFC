import { useId } from 'react'


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
    const id = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2'>
                <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
                <input
                    type="number"
                    className='outline-none w-full bg-transparent py-1.5'
                    id={id}
                    placeholder={amount}
                    disabled={amtDisabled}
                    value={amount}
                    onChange={(e) => onAmtChange && onAmtChange(Number(e.target.value))}

                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>
                    Currency Type
                </p>
                <select
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    value={defaultCurrency}
                    onChange={(e) => onCurrChange && onCurrChange(e.target.value)}
                    disabled={currDisabled}
                >
                    {currencyOptions.map((curr) => (
                        <option key={curr} value={curr}>
                            {curr}
                        </option>
                    ))}

                </select>
            </div>
        </div>

    )
}

export default InputCard