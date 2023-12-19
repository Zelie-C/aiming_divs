import { useNavigate } from "react-router-dom"
import '../home.css'
import React, { useCallback, useEffect, useState } from "react"

const Home = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState<string>("")
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null)

  useEffect(
    () => {
      
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault;
        setInstallPrompt(e);
      })
    }, [])

  const handleUsernameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }, [])

  const handleStartButtonClick = () => {
    navigate('/game/' + username)
  }

  const handleInstallButtonClick = useCallback(async() => {
    if(!installPrompt) {
      return
    }
    try {
      await installPrompt.prompt()
    } catch(error){
      
    }
  }, [])

  return (
    <>
      <div className="app-home-container">
        <div className="home">
          <div className="input-username">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" onChange={handleUsernameChange} required/>
          </div>
          <button onClick={handleStartButtonClick}>Start</button>
          <button onClick={handleInstallButtonClick}>Installer</button>
        </div>
      </div>
    </>
  )
}

export default Home
