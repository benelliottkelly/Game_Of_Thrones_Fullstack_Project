import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'



import { SearchResultsList } from './SearchResultsList'


export default function NavBarSearch(){

  const [ input, setInput ] = useState('')
  const [ results, setResults ] = useState([])
  const [ error, setError ] = useState(null)

  const fetchData = async (endpoint, value) => {
    try {
      const response = await fetch (`http://localhost:3000/api/${endpoint}`)
      if (!response.ok) {
        throw new Error(`Network response for ${endpoint} was not ok.`)
      }
      const json = await response.json()
    
    let filteredResults = []
    if (endpoint === 'houses') {
      filteredResults = json.filter(
        (item) =>
          value && item.houseName.toLowerCase().includes(value.toLowerCase())
      )
    } else if (endpoint === 'places') {
      filteredResults = json.filter(
        (item) =>
          value && item.name.toLowerCase().includes(value.toLowerCase())
      )
    } else if (endpoint === 'characters') {
      filteredResults = json.filter(
        (item) =>
          value &&
          (item.firstName.toLowerCase().includes(value.toLowerCase()) ||
            item.lastName.toLowerCase().includes(value.toLowerCase()) || 
            (`${item.firstName.toLowerCase()} ${item.lastName.toLowerCase()}`).includes(value.toLowerCase()))
      )
    }
    
    return filteredResults
    } catch (error) {
      setError('Error fetching data. Please try again.') // Set error state if fetch fails
      console.error('Error fetching data:', error)
    }
  }

  const handleChange = async (value) => {
    setInput(value)
    try {
      if(!value) {
        setResults([])
        return
      }

      const [houses, places, characters] = await Promise.all([
      fetchData('houses', value),
      fetchData('places', value),
      fetchData('characters', value),
      ])

      const combinedResults = [...houses, ...places, ...characters]
      console.log(combinedResults)
      setResults(combinedResults)
      setError(null)
    } catch(error) {
      setError('Error fetching data. Please try again.')
      console.error('Error fetching data:', error)
    }
  }

return (
  <>
    <div className='input-wrapper'>
      <FaSearch  id='search-icon' />
      <input 
        className='nav-search' 
        placeholder='Type to search' 
        value={input} 
        onChange={(e) => handleChange(e.target.value)} />
    </div>
    <SearchResultsList results={results} />
  </>
)
}