import { Outlet } from 'react-router-dom'

// Components
import Nav from './components/Nav'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
