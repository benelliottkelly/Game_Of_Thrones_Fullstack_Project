import { useEffect, useState } from "react"
import { Form, useActionData, useNavigate, useLoaderData } from 'react-router-dom'
import ImageUploadField from "./ImageUploadField"
export default function EditCharacter(){

  const res = useActionData()
  const data  = useLoaderData()
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
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    if (e.target.value) {
      e.target.classList.remove("empty")
      e.target.classList.add("valid")
    } else if (!e.target.value) {
      e.target.classList.remove("valid")
    }
  }

  function checkFields() {
    const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')
    const hometown = document.getElementById('hometown')
    const house = document.getElementById('house')

    if (!firstName.classList.contains('valid')) {
      firstName.classList.add('empty')
    }
    if (!lastName.classList.contains('valid')) {
      lastName.classList.add('empty')
    }
    if (!hometown.classList.contains('valid')) {
      hometown.classList.add('empty')
    }
    if (!house.classList.contains('valid')) {
      house.classList.add('empty')
    }
  }




  useEffect(() => {
    console.log(res)
    if (res?.status == 200) {
      navigate(`/characters/${res.data._id}`)
    }
    if (res?.status === 400) {
      console.log('Not complete')
    }
  }, [res, navigate])


  return(
    <>
    <h1 className="text-center bold display-3 mb-4" >Edit Character</h1>
    <Form className="form" method="POST">
      <input id="firstName" type="text" name="firstName" placeholder="First Name" defaultValue={formData.firstName} onChange={handleChange} />
      <input id="lastName" type="text" name="lastName" placeholder="Last Name" defaultValue={formData.lastName} onChange={handleChange} />
    
      <ImageUploadField name="image" setFormData={setFormData} formData={formData} />
      <label htmlFor="image">Image Upload</label>
      <input type="text" name="biography" placeholder="Bio" defaultValue={formData.biography} onChange={handleChange} />

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
      <input className="create-submit" type="submit" defaultValue="Update Character" onClick={checkFields} />
    </Form>
  </>
  )
}