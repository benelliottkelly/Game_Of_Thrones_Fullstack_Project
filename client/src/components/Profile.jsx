import { useLoaderData, Link, Form } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { activeUser } from "../utils/helpers/common"

// import { updateUserImage } from "../utils/actions/user"
import { getToken, formToObj } from "../utils/helpers/common"

export const handleUpload = async ({request}) => {
  try {
    const data = await formToObj(request)
    console.log(data)
    return await axios.put(`/api/users`, data, { headers: { Authorization: `Bearer ${getToken()}` }})
    
  } catch(error) {
    console.log(error)
  }
}


export default function Profile(){
  console.log('Hit profile route')  

  // On initial render
  const userInfo = useLoaderData()
  const { username, email, characterCreated, image } = userInfo

  // const res = useActionData()

  const [formData, setFormData] = useState({
    image: ''
  })



  const handleImageUpload = async (event) => {
    const preset = import.meta.env.VITE_UPLOAD_PRESET
    const file = event.target.files[0]
    const endpoint = import.meta.env.VITE_UPLOAD_URL

    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', preset)

    try {
      const response = await axios.post(endpoint, data)
      const secureUrl = response.data.secure_url

      setFormData({ image: secureUrl })      
    } catch (error) {
      console.error('Error uploading image', error)
    }
  }



  return (
    <>  <div className="card-two">
          <div className="card--body">
            <div className="account-info">
              <h2>Account Info</h2>
              {userInfo.image ? (
                <img src={userInfo.image} alt="User" style={{ maxWidth: "150px", maxHeight: "150px" }} />
              ) : (
                <>
                  <input type="file" onChange={handleImageUpload} accept="image/*" />
                  <Form method="POST">
                    <input name="image" type="hidden" value={formData.image} />
                    <input className="create-submit" type="submit" />
                  </Form>
                </>
              )}
              <p>Username: {username}</p>
              <p>Email: {email}</p>
            </div>
          </div>
        </div>      
          <div className="character-list-container">
            <h2>Characters Created</h2>
            <div className="character-list">
              {characterCreated.map((character) => (
                <div key={character._id} className="character-item">
                  <Link to={`/characters/${character._id}`} rel="noreferrer">
                  <img src={character.image} alt={`${character.firstName} ${character.lastName}`} style={{ maxWidth: "100px", maxHeight: "100px"}} />
                  <p>{`${character.firstName} ${character.lastName}`}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
    </>
  )

}