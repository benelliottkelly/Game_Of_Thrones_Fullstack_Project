import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home.jsx'
import AllCharacters from './components/AllCharacters.jsx'
import AllHouses from './components/AllHouses.jsx'
import AllPlaces from './components/AllPlaces.jsx'
import SingleCharacter from './components/SingleCharacter.jsx'
import SinglePlace from './components/SinglePlace.jsx'
import SingleHouse from './components/SingleHouse.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/places',
        element: <AllPlaces />
      },
      {
        path: '/places/:placeId',
        element: <SinglePlace />
      },
      {
        path: '/houses',
        element: <AllHouses />
      },
      {
        path: '/houses/:houseId',
        element: <SingleHouse />
      },
      {
        path: '/characters',
        element: <AllCharacters />
      },
      {
        path: '/characters/:characterId',
        element: <SingleCharacter />
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)