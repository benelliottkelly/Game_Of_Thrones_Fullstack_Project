import { useEffect, useState } from "react"
import { Form, useActionData, useNavigate } from 'react-router-dom'

export default function CreateCharacter(){

  const res = useActionData()
  const navigate = useNavigate()

  const [ formData, setFormData ] = useState({
    firstName: '',
    lastName: '',
    image: '',
    battles: [],
    biography: '',
    house: ''
    })

  useEffect(() => {
    console.log(res)
    if (res.status == 201) {
      navigate(`/characters/${res.data._id}`)
    }
  })

  console.log(`Hit create character`)
  return(
    <>
      <h1 className="text-center bold display-3 mb-4">Create A Character</h1>
      <Form className="form" method="POST">
      </Form>
    </>
  )
}