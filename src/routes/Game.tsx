import { useCallback, useEffect, useState } from 'react'
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
  const [startTime, setStartTime] = useState<number>(0)
  const [endTime, setEndTime] = useState<number>(0)

  useEffect(() => {
    const startDate = Date.now()
    setStartTime(startDate)
  }, [])

  useMemo(() => {

  })

    setInterval(() => {
    }, 1000)



  const handleDivClick = useCallback(() => {
    if (clickCounter < 9) {
      setClickCounter(clickCounter + 1)
      setLeftPosition(randomizeLeftPosition())
      setTopPosition(randomizeTopPosition())
    }
    else {
      const endDate = Date.now()
      setEndTime(endDate)

      navigate('/end')
    }
  }, [navigate, clickCounter])



  return (
    <>
      <div className='affichage-container'>
        <div className="col">
          <div className="timer">Time : </div>
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
