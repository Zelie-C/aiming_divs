import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate()

  const handleStartButtonClick = () => {
    navigate('/game')
  }

  return (
    <>
      <button onClick={handleStartButtonClick}>Start</button>
    </>
  )
}

export default Home
