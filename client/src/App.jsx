import { Outlet } from 'react-router-dom'

// Components
import Nav from './components/Nav'
import NavbarFunction from './components/Nav'

function App() {
  return (
    <>
      <NavbarFunction />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
