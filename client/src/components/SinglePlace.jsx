import { useEffect, useState } from "react"
import axios from 'axios'

export default function SinglePlace(){
  const [ place, setPlace ] = useState({})

  useEffect(() => {
    async function getPlaceSingle() {
      try {
        const place = useLoaderData()
        console.log(place)
      } catch (error) {
        console.log(error)
      }
    }
    getPlaceSingle()
  })

  return (
    <h2>Single Place</h2>
  )
}