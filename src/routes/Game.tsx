import { useCallback, useEffect, useState } from 'react'
import '../game.css'
import { useNavigate, useParams } from 'react-router-dom'

const randomizeLeftPosition = () => {
  return Math.floor(Math.random() * 100)
}

const randomizeTopPosition = () => {
  return Math.floor(Math.random() * 100)
}

const Game = () => {

  const navigate = useNavigate();
  const params = useParams()
  const [clickCounter, setClickCounter] = useState<number>(0)
  const [leftPosition, setLeftPosition] = useState<number>(randomizeLeftPosition())
  const [topPosition, setTopPosition] = useState<number>(randomizeTopPosition())
  const [timelapse, setTimelapse] = useState<number>(0)
  const [startTime, setStartTime] = useState<number>(0)
  const [userTimes, setUserTimes] = useState<number[]>([])


  useEffect(() => {
    setStartTime(Date.now())
    setInterval(() => {
      setTimelapse(Math.random())
    }, 120)
  }, [])


  const handleDivClick = useCallback(() => {
    if (clickCounter < 9) {
      setClickCounter(clickCounter + 1)
      setLeftPosition(randomizeLeftPosition())
      setTopPosition(randomizeTopPosition())
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
    }
  }, [navigate, clickCounter,params.username, userTimes])


  return (
    <>
      <div className='affichage-container'>
        <div className="col">
          <div className="user">{params.username}</div>
          <div className="timer">Time : {startTime ? (Date.now() - startTime) / 1000 : 0}</div>
          <div className='affichage'>{clickCounter} / 10</div>
        </div>
      </div>
      <div className="game">
        <div className='aim' onClick={handleDivClick} style={{top: `${topPosition}%`, left: `${leftPosition}%`}}></div>
      </div>
    </>
  )
}

export default Game
