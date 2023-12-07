import { useLoaderData } from "react-router-dom"

export default function SingleCharacter() {

  const character = useLoaderData()
  const { firstName, lastName, battles, biography, house, hometown, image, associatedHouse } = character
  console.log(associatedHouse)
  const { crest } = associatedHouse[0]
  console.log(crest)
  return (
    <>
      <h2>{firstName} {lastName}</h2>
      <h3>House {house}</h3>
      <article className="description">
        <h3>Bio:</h3>
        <h4>{biography}</h4>
      </article>
      <img src={crest} alt="family crest" />
    </>
  )
}