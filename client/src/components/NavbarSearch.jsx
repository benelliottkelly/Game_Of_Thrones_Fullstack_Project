import { useState } from 'react'

import { FaSearch } from 'react-icons/fa'


export default function NavBarSearch(){

  const [ input, setInput ] = useState('')

  const fetchData = (value) => {
    fetch(`http://localhost:3000/api/houses`)
      .then((response) => response.json())
      .then((json) => {
        const results =  json.filter((house) => {
          return value && house.houseName 
        })
        console.log(results)
      })
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

return (
  <div className='input-wrapper'>
    <FaSearch  id='search-icon' />
    <input 
      className='nav-search' 
      placeholder='Type to search' 
      value={input} 
      onChange={(e) => handleChange(e.target.value)} />
  </div>
)
}