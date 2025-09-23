import React, { useEffect, useState } from 'react'




function Github() {
  const [data, setData]  = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/im-inferno')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  // console.log(data);  
    return (
      <div className='text-center p-20 ' >
        <img className='rounded-full w-32 h-32 mx-auto' src={data.avatar_url} alt="Img not found" />
        <h1 className='text-3xl font-bold text-orange-700 hover:text-orange-800'>Name: {data.name}</h1> 
        </div>
    )
  }

export default Github