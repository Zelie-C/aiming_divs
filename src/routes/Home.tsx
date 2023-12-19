import { useNavigate } from "react-router-dom"
import '../home.css'
import React, { useCallback, useEffect, useState } from "react"
import FullscreenButton from "../components/FullscreenButton"

const Home = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState<string>("")
  const [installPrompt, setInstallPrompt] = useState<any>(null)
  const [shareData, setShareDate] = useState({})
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)

  useEffect(
    () => {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault;
        setInstallPrompt(e);
      })
    }, [])

  useEffect(
    () => {
      setShareDate(
        {title: "Aiming divs",
        url: "https://aiming-divs.vercel.app/"})
    }, [])

  const handleUsernameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }, [])

  const handleStartButtonClick = () => {
    navigate('/game/' + username)
  }

  const handleInstallButtonClick = useCallback(() => {
    if(!installPrompt) {
      return
    }
    installPrompt.prompt()
  
  }, [])
  
  const handleShareButtonClick = () => {
    navigator.share(shareData)
  }

  const handleFullscreenClick = () => {
    if(!isFullscreen) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }




  return (
    <>
      <div className="app-home-container">
        <div className="home">
          <div className="input-username">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" onChange={handleUsernameChange} required/>
          </div>
          <div className="home-btn-container">
            <button className='home-btn' onClick={handleStartButtonClick}>Start</button>
            <button className='home-btn' onClick={handleInstallButtonClick}>Installer</button>
            <button className='home-btn' onClick={handleShareButtonClick}>Partager</button>
          </div>
        </div>
        <FullscreenButton onClick={() => handleFullscreenClick()} />
      </div>
    </>
  )
}

export default Home
