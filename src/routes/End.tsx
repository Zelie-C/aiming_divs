import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const End = () => {

  const navigate = useNavigate()
  const params = useParams()
  const [times, setTimes] = useState<number[]>([])

  useEffect(() => {
    const times = localStorage.getItem(params.username!)!
    setTimes(JSON.parse(times))
  })

  const handleRestartClick = () => {
    localStorage.removeItem('time')
    navigate('/game/' + params.username)
  }
  
  return (
    <>
    <div className="end-container">
      <div className="final-score">
        <h1>Partie terminée</h1>
        <p>Time: {localStorage.getItem('time')}</p>
        <button onClick={handleRestartClick}>Restart</button>
      </div>
      <div className="best-scores">
        <h1>Meilleurs temps</h1>
        {times.map(
          (time) => (
            <div className="best-time">{time}</div>
          )
        )}
      </div>
    </div>
    </>
  )
}

export default End
