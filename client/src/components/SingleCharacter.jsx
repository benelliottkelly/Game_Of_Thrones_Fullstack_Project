import { useEffect, useState } from "react"
import axios from 'axios'
import { useLoaderData } from "react-router-dom"

export default function SingleCharacter(){
  const [ character, setCharacter ] = useState({})

  useEffect(() => {
    async function getCharacterSingle() {
      try {
        const character = useLoaderData()
        console.log(character)
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