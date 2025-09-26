import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-800 text-white min-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold mb-4'>Hello Vite + React + TailwindCSS!</h1>
        </div>
    </>
  )
}

export default App
