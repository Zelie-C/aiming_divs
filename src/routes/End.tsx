import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import '../end.css'

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

  const handleEraseScores = () => {
    localStorage.removeItem(params.username!)
    navigate('/end/' + params.username)
  }
  
  return (
    <>
    <div className="end-container">
      <div className="final-score">
        <h1>Partie terminée</h1>
        <p className="current-result">Temps : {localStorage.getItem('time')}</p>
        <div className="buttons-container"></div>
        <button onClick={handleRestartClick}>Rejouer</button>
        <button className="clear-scores" onClick={handleEraseScores}>Effacer les scores</button>
      </div>
      <div className="best-scores">
        <h1>Meilleurs temps</h1>
        {times ? times.map(
          (time) => (
            <div className="best-time">{time}</div>
          )
        ) : <div>Aucun score enregistré</div>}
      </div>
    </div>
    </>
  )
}

export default End
