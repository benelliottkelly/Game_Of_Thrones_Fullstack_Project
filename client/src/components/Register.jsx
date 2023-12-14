import { useEffect } from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'

export default function Register(){
  console.log(`Hit register page`)

  const res = useActionData()
  const navigate = useNavigate()

  useEffect(()=> {
    if(res?.status === 201) {
      navigate('/login')
    }
  }, [res, navigate])

  return(
    <>
      <h1 className="text-center bold display-3 mb-4">Register</h1>
      <Form className='form' id="registrationForm" method="POST">
        <input type="text" name="username" placeholder=' Username' />
        <input type="email" name="email" placeholder=' Email' />
        <input type="password" name="password" placeholder=' Password' />
        <input type="password" name="passwordConfirmation" placeholder=' Confirm password' />
        <button className='btn btn-warning' type="submit">Register</button>
        {res && <p className='danger'>{res.data.message}</p>}
      </Form>
    </>
  )
}