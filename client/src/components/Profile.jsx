import { useLoaderData, Link, useActionData } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

// Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Form } from "react-router-dom"

import { activeUser } from "../utils/helpers/common"


export default function Profile(){
  console.log('Hit profile route')  
  
  // On initial render
  const userInfo = useLoaderData()
  const { userId, username, email, characterCreated } = userInfo

  const res = useActionData()

  const [userImage, setUserImage] = useState(null)



  const handleImageUpload = async (event) => {
    const preset = import.meta.env.VITE_UPLOAD_PRESET
    const file = event.target.files[0]
    const endpoint = import.meta.env.VITE_UPLOAD_URL

    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', preset)
    
    try{
      const response = await axios.post(endpoint, data);
      const secureUrl = response.data.secure_url;

      setUserImage(secureUrl)
      console.log(secureUrl)
      return secureUrl
    } catch(error) {
      console.error('Error uploading image', error)
    }

  }

  const handleSubmit = async (event) => {

    const imageUrl = await handleImageUpload(event)

    if(imageUrl) {
      const formData = {
        image: imageUrl
      }
      console.log('Form submitted with image URL:', formData)
    } else {
      console.error('Failed to upload image. Cannot submit form.');
    }
  }



  return (
    <>
      <Container fluid className="profile-container">
        <Row>
          <Col sm="4">
            <div className="account-info">
              <h1>Account Info</h1>
              {userInfo.image ? (
                <img src={URL.createObjectURL(userImage)} alt="User" style={{ maxWidth: "150px", maxHeight: "150px" }} />
              ) : (
                <Form className="form" method="PUT">
                <input type="file" onChange={handleImageUpload} accept="image/*" />
                <input className="create-submit" type="submit" defaultValue="Profile Picture" />
                </Form>
              )}
              <h2>Username: {username}</h2>
              <h2>Email: {email}</h2>
              </div>
          </Col>
          <Col sm="8">
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
          </Col>
        </Row>
      </Container>
    </>
  )

}