import React, { useState } from 'react'
import './Card.css'
function Card({clubname = "Club Name",country,logo = "",foundedIn}) {
  const [count,setCount] = useState(0)

  function addCount(){

    setCount(count+1)
  }
  function remove(){

    setCount(count-1)
  }


    return (
        <div>
            <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img
      className="size-48 shadow-xl rounded-md"
      alt="Barcelona Logo"
      src={logo}
    />
  </div>
  <div className="flex flex-col gap-2 items-start">
    <span className="text-2xl font-medium">{clubname}</span>
    <span className="font-medium text-sky-500">{country}</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>{foundedIn}</span>
    </span>
  </div>
</div>
  <div>
    <button onClick={addCount} className='bg-blue-500 text-white py-2 px-4 rounded'>add : {count}</button>
    <button onClick={remove} className='bg-blue-500 text-white py-2 px-4 rounded'>remove : {count}</button>
  </div>
  
        </div>
    )
}

export default Card