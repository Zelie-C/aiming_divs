import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import '../end.css'

const End = () => {

  const navigate = useNavigate()
  const params = useParams()
  const [times, setTimes] = useState<number[] | null>([])
  const [isBestScores, setIsBestScores] = useState<boolean>(true)

  useEffect(() => {
    if(times){
      const times = localStorage.getItem(params.username!)!
      const parsedTimes = JSON.parse(times)
      const sortedTimes = parsedTimes.sort((a: number, b: number) => a - b)
      setTimes(sortedTimes)
    }
  }, [])

  const handleRestartClick = () => {
    localStorage.removeItem('time')
    navigate('/game/' + params.username)
  }

  const handleEraseScores = useCallback(() => {
    localStorage.removeItem(params.username!)
    setIsBestScores(false)
    if (window.Notification){
      Notification.requestPermission()
      .then((permission) => {
        if(permission === "granted"){
          new Notification("Données effacées", {
            body: `Les temps de ${params.username} ont été effacées !`
          })
        }
      })
    }
  }, [params.username])

  
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
        {isBestScores && times ? times.map(
          (time, index) => (
            <div className="best-time">{index + 1} - {time}</div>
          )
        ) : <div>Aucun score enregistré</div>}
      </div>
    </div>
    </>
  )
}

export default End
