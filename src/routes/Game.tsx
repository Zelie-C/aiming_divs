import { useCallback, useState } from 'react'
import '../game.css'

const randomizeLeftPosition = () => {
  return Math.floor(Math.random() * 100)
}

const randomizeTopPosition = () => {
  return Math.floor(Math.random() * 100)
}

const Game = () => {

  const [clickCounter, setClickCounter] = useState<number>(0)
  const [leftPosition, setLeftPosition] = useState<number>(randomizeLeftPosition())
  const [topPosition, setTopPosition] = useState<number>(randomizeTopPosition())

  // useEffect(
  //   () => {
  //     setLeftPosition(randomizeLeftPosition)
  //     setTopPosition(randomizeTopPosition)
  //   }, [leftPosition, topPosition]
  // )

  const handleDivClick = useCallback(() => {
    setClickCounter(clickCounter + 1)
    setLeftPosition(randomizeLeftPosition())
    setTopPosition(randomizeTopPosition())
  }, [clickCounter])

  return (
    <>
      <div className='affichage-container'>
        <div className='affichage'>{clickCounter} / 10</div>
      </div>
      <div className="game">
        <div className='aim' onClick={handleDivClick} style={{top: `${topPosition}%`, left: `${leftPosition}%`}}></div>
      </div>
    </>
  )
}

export default Game
