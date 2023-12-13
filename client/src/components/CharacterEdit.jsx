import { useEffect, useState } from "react"
import { Form, useActionData, useNavigate, useLoaderData } from 'react-router-dom'
export default function EditCharacter() {

  const res = useActionData()
  const data = useLoaderData()
  const navigate = useNavigate()

  const { singleCharacter, houses, allCharacters } = data

  const [formData, setFormData] = useState({
    firstName: singleCharacter.firstName || '',
    lastName: singleCharacter.lastName || '',
    image: '',
    battles: [],
    biography: singleCharacter.biography || '',
    hometown: singleCharacter.hometown || '',
    house: singleCharacter.house || '',
  })

  function handleChange(e) {
    const { name, value } = e.target;
    let cleanedValue = value.replace(/[^\w\s'"]/gi, '')

   
      setFormData(prevState => ({
        ...prevState,
        [name]: cleanedValue,
      }));
     
      if (e.target.value) {
        e.target.classList.remove("empty")
      } else if (!e.target.value) {
        e.target.classList.add("empty")
    }

  }


  useEffect(() => {
    if (res?.status == 200) {
      navigate(`/characters/${res.data._id}`)
    }
    if (res?.status === 400) {
      console.log('Not complete')
    }
  }, [res, navigate])

  return (
    <>
      <h1 className="text-center bold display-3 mb-4" >Edit Character</h1>
      <Form className="form" method="POST">
        <input id="firstName" type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
        <input id="lastName" type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />

        <input type="text" name="biography" placeholder="Bio" value={formData.biography} onChange={handleChange} />

        <select id="hometown" className="create-drop" name="hometown" defaultValue={formData.hometown} onChange={handleChange}>
          <option defaultValue={formData.hometown}>{formData.hometown}</option>
          {allCharacters.length > 0 && Array.from(new Set(allCharacters.map(char => char.hometown))).map((hometown, index) => (
            <option key={index} defaultValue={hometown}>{hometown}</option>
          ))}
        </select>

        <select id="house" className="create-drop" name="house" defaultValue={formData.house} onChange={handleChange}>
          <option defaultValue=''>{formData.house}</option>
          {houses.length > 0 &&
            houses.map(house => {
              return <option key={house._id} defaultValue={house.houseName}>{house.houseName}</option>
            })}
        </select>
        <input className="create-submit" type="submit" defaultValue="Update Character" />
      </Form>
    </>
  )
}