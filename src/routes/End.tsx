import { useNavigate } from "react-router-dom"

const End = () => {

  const navigate = useNavigate()
  const handleRestartClick = () => {
    localStorage.removeItem('time')
    navigate('/game')
  }
  const time = localStorage.getItem('time')

  return (
    <>
      <h1>Partie terminée</h1>
      <p>Time: {time}</p>
      <button onClick={handleRestartClick}>Restart</button>
    </>
  )
}

export default End
