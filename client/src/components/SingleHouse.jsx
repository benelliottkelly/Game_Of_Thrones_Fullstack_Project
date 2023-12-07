import { useEffect, useState } from "react"
import axios from 'axios'

export default function SingleHouse(){
  const [ house, setHouse ] = useState({})

  useEffect(() => {
    async function getHouseSingle() {
      try {
        const house = useLoaderData()
        console.log(house)
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