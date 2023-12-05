import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home.jsx'
import AllCharacters from './components/AllCharacters.jsx'
import AllHouses from './components/AllHouses.jsx'
import AllPlaces from './components/AllPlaces.jsx'

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
        path: '/houses',
        element: <AllHouses />
      },
      {
        path: '/characters',
        element: <AllCharacters />
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)