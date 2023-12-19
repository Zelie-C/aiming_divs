import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Game from './routes/Game'
import Home from './routes/Home'
import End from './routes/End'
import './style.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/game/:username',
    element: <Game />
  },
  {
    path: '/end/:username',
    element: <End />
  }
])

function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
