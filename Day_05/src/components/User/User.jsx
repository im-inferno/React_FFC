import react from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
   

    <div className='text-3xl font-bold text-center bg-orange-600 text-white p-20'>
    User : {userId}</div>
  )
}

export default User