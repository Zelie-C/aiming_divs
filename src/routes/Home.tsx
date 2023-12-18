import { useNavigate } from "react-router-dom"
import '../home.css'
import React, { useState } from "react"

const Home = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState<string>("")

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleStartButtonClick = () => {
    navigate('/game/' + username)
  }

  return (
    <>
      <div className="app-home-container">
        <div className="home">
          <div className="input-username">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" onChange={handleUsernameChange} required/>
          </div>
          <button onClick={handleStartButtonClick}>Start</button>
        </div>
      </div>
    </>
  )
}

export default Home
