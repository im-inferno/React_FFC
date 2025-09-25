import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div >
            <h1>Login Page</h1>
            <form>
                <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <br />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                <button type='submit' onClick={handleSubmit}>Login</button>
            </form>

        </div>
    )
}

export default Login