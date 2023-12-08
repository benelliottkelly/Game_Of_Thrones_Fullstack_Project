import { useEffect, useState } from "react"
import { Form, useActionData, useNavigate } from 'react-router-dom'
import ImageUploadField from "./ImageUploadField"

export default function CreateCharacter(){

  const res = useActionData()
  const navigate = useNavigate()

  const [ formData, setFormData ] = useState({
    firstName: '',
    lastName: '',
    image: '',
    battles: [],
    biography: '',
    hometown: ''
    })

    function handleChange(e){
      setFormData ({ ...formData, [e.target.name]: e.target.value })
    }

  useEffect(() => {
    console.log(res)
    if (res?.status == 201) {
      navigate(`/characters/${res.data._id}`)
    }
  })

  console.log(`Hit create character`)
  return(
    <>
      <h1 className="text-center bold display-3 mb-4">Create A Character</h1>
      <Form className="form" method="POST">
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName}  />
        <ImageUploadField setFormData={setFormData} formData={formData} />
        <input type="text"  name="biography" placeholder="Bio" value={formData.biography}  />
        <input type="text" name="hometown" placeholder="Hometown"  value={formData.hometown} />
        <input type="submit" value="Create Character" />
      </Form>
    </>
  )
}