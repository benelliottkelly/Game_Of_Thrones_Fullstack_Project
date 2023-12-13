import { useEffect, useState } from "react"
import { Form, useActionData, useNavigate, useLoaderData } from 'react-router-dom'
import ImageUploadField from "./ImageUploadField"

export default function CreateCharacter() {

  const res = useActionData()

  const data = useLoaderData()
  const { houses, characters } = data

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    image: '',
    battles: [],
    biography: '',
    hometown: '',
    house: '',
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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
      console.log('last name hit')
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
    if (res?.status == 201) {
      navigate(`/characters/${res.data._id}`)
    }
    if (res?.status === 400) {
      console.log('Not complete')
    }
  }, [res, navigate])


  return (
    <>
      <h1 className="text-center bold display-3 mb-4" >Create A Character</h1>
      <Form className="form" method="POST">
        <input id="firstName" type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
        <input id="lastName" type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
      
        <ImageUploadField name="image" setFormData={setFormData} formData={formData} />
        <label htmlFor="image">Image Upload</label>

        <input type="text" name="biography" placeholder="Bio" value={formData.biography} onChange={handleChange} />

        {/* <input type="text" name="hometown" placeholder="Hometown"  value={formData.hometown} onChange={handleChange} /> */}

        <select id="hometown" className="create-drop" name="hometown" value={formData.hometown} onChange={handleChange}>
          <option value=''>Select Home Town</option>
          {characters.length > 0 && Array.from(new Set(characters.map(char => char.hometown))).map((hometown, index) => (
            <option key={index} value={hometown}>{hometown}</option>
          ))}
        </select>

        {/* <input type="text" name="house" placeholder="House" value={formData.house} onChange={handleChange} /> */}

        <select id="house" className="create-drop" name="house" value={formData.house} onChange={handleChange}>
          <option value=''>Select House</option>
          {houses.length > 0 &&
            houses.map(house => {
              return <option key={house._id} value={house.houseName}>{house.houseName}</option>
            })}
        </select>
        <input className="create-submit" type="submit" value="Create Character" onClick={checkFields} />
      </Form>
    </>
  )
}