// Packages
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.scss'

// Page components
import App from './App.jsx'
import Home from './components/Home.jsx'
import AllCharacters from './components/AllCharacters.jsx'
import AllHouses from './components/AllHouses.jsx'
import AllPlaces from './components/AllPlaces.jsx'
import SingleCharacter from './components/SingleCharacter.jsx'
import SinglePlace from './components/SinglePlace.jsx'
import SingleHouse from './components/SingleHouse.jsx'
import EditCharacter from './components/CharacterEdit.jsx'
import CreateCharacter from './components/CreateCharacter.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'


// Loaders
import { characterLoader, houseLoader, placeLoader, singleCharacterLoader, singleHouseLoader, singlePlaceLoader, createLoader } from './utils/loaders.js'

// Actions
import { loginUser, registerUser } from './utils/actions/auth.js'
import { createCharacter, updateCharacter, deleteCharacter } from './utils/actions/character.js';

// Browser Router
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
        element: <AllPlaces />,
        loader: placeLoader
      },
      {
        path: '/places/:placeId',
        element: <SinglePlace />,
        loader: async ({ params }) => singlePlaceLoader(params.placeId)
      },
      {
        path: '/houses',
        element: <AllHouses />,
        loader: houseLoader
      },
      {
        path: '/houses/:houseId',
        element: <SingleHouse />,
        loader: async ({ params }) => singleHouseLoader(params.houseId)
      },
      {
        path: '/characters',
        element: <AllCharacters />,
        loader: characterLoader
      },
      {
        path: '/characters/:characterId',
        element: <SingleCharacter />,
        loader: async ({ params }) => singleCharacterLoader(params.characterId),
        action: async ({ request, params }) => deleteCharacter(request, params.characterId)
        // Add action for delete character
      },
      {
        path: '/characters/:characterId/edit',
        element: <EditCharacter />,
        action: async ({ request, params }) => updateCharacter(request, params.characterId),
        loader: async ({ params }) => singleCharacterLoader(params.characterId)
        // Add action for edit character
      },
      {
        path: '/characters/create',
        element: <CreateCharacter />,
        action: async ({ request }) => createCharacter(request),
        loader: createLoader
      },
      {
        path: '/register',
        element: <Register />,
        action: async ({ request }) => registerUser(request)
      },
      {
        path: '/login',
        element: <Login />,
        action: async ({ request }) => loginUser(request)
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)