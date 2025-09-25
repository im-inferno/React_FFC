import React,{useContext} from 'react'
import UserContext from '../context/UserContext';

function Profile() {

    const { user } = useContext(UserContext);

    if (!user) {
        return <h1>Please login to view profile</h1>
    }
  return (
    <h1>Profile of {user.username}</h1>
  )
}

export default Profile