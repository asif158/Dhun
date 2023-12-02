import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Open from '../assets/download.png'
import Close from '../assets/download1.png'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleLogin = async () => {
    // const apiUsername = 'DJ@4'
    // const apiPassword = 'Dhunjam@2023'

    try {
      const response = await axios.post(`${import.meta.env.VITE_API}/login`, {
        username: username,
        password: password,
      })

      // console.log('API Response:', response.data.data.id)
      window.localStorage.setItem('Id', response.data.data.id)

      navigate('/admin')
    } catch (error) {
      console.error('API Error:', error)
    }
  }

  const handleCreateAccount = () => {
    console.log('Creating account for Username:', username)
  }

  return (
    <div className="login">
      <h2>Venue Admin Login</h2>
      <label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <div style={{ position: 'relative', marginTop: '20px' }}>
        <label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            style={{ position: 'absolute', right: '15px', bottom: '5px' }}
            onClick={handleTogglePassword}
          >
            {showPassword ? (
              <img width="24px" src={Open} />
            ) : (
              <img src={Close} />
            )}
          </span>
        </label>
      </div>
      <br />
      <button onClick={handleLogin}>Sign in</button>
      <br />
      <a onClick={handleCreateAccount}>New Registration ?</a>
    </div>
  )
}

export default Login
