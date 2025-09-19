import { useCallback, useEffect, useRef, useState, } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPass] = useState('')

  const generatePass = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*()_+'
    for (let i = 1; i < length; i++) {
      const letter = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(letter)
    }
    setPass(pass)
  }, [length, numAllowed, charAllowed])
const passRef = useRef(null)

useEffect(() => {
    generatePass()
  }, [length, numAllowed, charAllowed])

const copyThePass = () => {
    window.navigator.clipboard.writeText(password)
    passRef.current.select()
  }



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3
     my-8 bg-gray-800 text-orange-400'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3 bg-amber-50'
            placeholder="Password"
            readOnly
            ref={passRef}
          ></input>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyThePass}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-1'>
            <input
              type='range'
              min={6}
              max={100}
              className='cursor-pointer'
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
              name='length'
              id='length'></input>
            <label htmlFor='length'>Length:{length}</label>
          </div>
          <div className='flex items-center gap-1'>
            <input
              type='checkbox'

              className='cursor-pointer'
              defaultValue={numAllowed}
              onChange={() => { setNumAllowed((prev) => !prev) }}
              name=''
              id=''></input>
            <label htmlFor='number'>Numbers</label>
          </div>
          <div className='flex items-center gap-1'>
            <input
              type='checkbox'

              className='cursor-pointer'
              defaultValue={charAllowed}
              onChange={() => { setCharAllowed((prev) => !prev) }}
              name=''
              id=''></input>
            <label htmlFor='char'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
