import { Outlet, useNavigation } from 'react-router-dom'

// Components
import Nav from './components/Nav'
import NavbarFunction from './components/Nav'



function App() {
  const navigation = useNavigation()
  console.log(navigation.state)
  return (
    <>
      <NavbarFunction />
      <main>
        {
          navigation.state === "idle" ?
            <Outlet />
            :
            <article className='loading-container'>
              <div className='loading-screen'></div>
            </article>
        }
      </main>
    </>
  )
}

export default App
