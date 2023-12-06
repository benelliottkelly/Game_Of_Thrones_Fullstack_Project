import { useEffect, useState } from "react"
import axios from 'axios'

export default function SingleHouse(){
  const [ house, setHouse ] = useState({})

  useEffect(() => {
    async function getHouseSingle() {
      try {
        const data = await axios.get('api/houses')
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getHouseSingle()
  })

  return (
    <h2>Single House</h2>
  )
}