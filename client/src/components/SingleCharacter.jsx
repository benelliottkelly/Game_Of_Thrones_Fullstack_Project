import { useEffect, useState } from "react"
import axios from 'axios'

export default function SingleCharacter(){
  const [ character, setCharacter ] = useState({})

  useEffect(() => {
    async function getCharacterSingle() {
      try {
        const data = await axios.get('api/characters')
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCharacterSingle()
  })

  return (
    <h2>Single Character</h2>
  )
}