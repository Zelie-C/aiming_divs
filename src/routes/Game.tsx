import { useCallback, useEffect, useState } from 'react'
import '../game.css'
import { useNavigate, useParams } from 'react-router-dom'

const randomizeLeftPosition = () => {
  return Math.floor(Math.random() * 100)
}

const randomizeTopPosition = () => {
  return Math.floor(Math.random() * 100)
}



const meowing = new Audio('assets/miaulement.mp3')

const Game = () => {

  const navigate = useNavigate();
  const params = useParams()
  const [clickCounter, setClickCounter] = useState<number>(0)
  const [leftPosition, setLeftPosition] = useState<number>(randomizeLeftPosition())
  const [topPosition, setTopPosition] = useState<number>(randomizeTopPosition())
  const [_, setTimelapse] = useState<number>(0)
  const [startTime, setStartTime] = useState<number>(0)
  const [userTimes, setUserTimes] = useState<number[]>([])
  const [latitude, setLatitude] = useState<string>("")
  const [longitude, setLongitude] = useState<string>("")
  const [country, setCountry] = useState<string>("")

  useEffect(
    () => {
      navigator.geolocation.getCurrentPosition(function(location) {
        const currentLatitude = location.coords.latitude;
        const currentLongitude = location.coords.longitude;
        setLatitude(JSON.stringify(currentLatitude))
        setLongitude(JSON.stringify(currentLongitude))
    });
  }, [navigator])

  useEffect(() => {
    setStartTime(Date.now())
    setInterval(() => {
      setTimelapse(Math.random())
      
    }, 120)
  }, [])

  useEffect(
    () => {
      const getCountry = async() => {
        if (latitude !== "" && longitude !== "") {
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
        const data = await response.json()
        console.log('data', data)
        setCountry(data.countryName)
        } else {
          console.error('Pas de localisation disponible')
        }
      }
      getCountry()    
  }, [latitude, longitude])

  const handleDivClick = useCallback(() => {
    if (clickCounter < 9) {
      setClickCounter(clickCounter + 1)
      setLeftPosition(randomizeLeftPosition())
      setTopPosition(randomizeTopPosition())
      meowing.pause()
      meowing.currentTime = 0
      meowing.play()
      window.navigator.vibrate(200)
    } else {
      const finalTime = (Date.now() - startTime) / 1000
      localStorage.setItem('time', JSON.stringify(finalTime))
      const storedTimes = localStorage.getItem(params.username!)
      if (storedTimes) {
        const parsedTimes: number[] = JSON.parse(storedTimes);
        const updatedTimes = [...parsedTimes, finalTime];
        setUserTimes(updatedTimes);
        localStorage.setItem(params.username!, JSON.stringify(updatedTimes))
      } else {
        setUserTimes([finalTime])
        localStorage.setItem(params.username!, JSON.stringify([finalTime]))
        
      }
      
      navigate('/end/' + params.username)
  
      setClickCounter(0)
    }
  }, [navigate, clickCounter,params.username, userTimes])

  return (
    <>
      <div className="game-container">
        <div className='affichage-container'>
          <div className="col">
            <div className="user">{params.username}</div>
            <div className="timer">Time : {startTime ? (Date.now() - startTime) / 1000 : 0}</div>
            <div className='affichage'>{clickCounter} / 10</div>
            <div className="country-name">{country}</div>
          </div>
        </div>
          <div className='aim' onClick={handleDivClick} style={{top: `${topPosition}%`, left: `${leftPosition}%`}}></div>
      </div>
    </>
  )
}

export default Game
