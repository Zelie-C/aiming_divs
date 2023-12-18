import { useCallback, useEffect, useMemo, useState } from 'react'
import '../game.css'
import { useNavigate } from 'react-router-dom'

const randomizeLeftPosition = () => {
  return Math.floor(Math.random() * 100)
}

const randomizeTopPosition = () => {
  return Math.floor(Math.random() * 100)
}

const Game = () => {

  const navigate = useNavigate();
  const [clickCounter, setClickCounter] = useState<number>(0)
  const [leftPosition, setLeftPosition] = useState<number>(randomizeLeftPosition())
  const [topPosition, setTopPosition] = useState<number>(randomizeTopPosition())
  const [timelapse, setTimelapse] = useState<number>(0)
  const [startTime, setStartTime] = useState<number>(0)
  const [endTime, setEndTime] = useState<number>(0)


  useEffect(() => {
    setStartTime(Date.now())
    setInterval(() => {
      setTimelapse(Math.random())
    }, 120)
  }, [])

  const elapsedTime = useMemo(() => {
    const time = (endTime - startTime) / 1000
    return time
  }, [])

  const handleDivClick = useCallback(() => {
    if (clickCounter < 9) {
      setClickCounter(clickCounter + 1)
      setLeftPosition(randomizeLeftPosition())
      setTopPosition(randomizeTopPosition())
    }
    else {
      const endDate = Date.now()
      setEndTime(endDate)
      localStorage.setItem('time', JSON.stringify(elapsedTime))
      navigate('/end')
    }
  }, [navigate, clickCounter, endTime])


  return (
    <>
      <div className='affichage-container'>
        <div className="col">
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
