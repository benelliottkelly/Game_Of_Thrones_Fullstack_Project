import { useLoaderData, Link } from "react-router-dom"
import { GiCrossedSwords } from "react-icons/gi"

// Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function SingleHouse() {

  const houses = useLoaderData()
  console.log(houses)
  const { bannermen, characters, crest, description, houseName, motto, places } = houses

  // Potentially add the below function to match houses with a characters home to confirm the house "headquarters"
  // function matchOccupiedToHome(){
  // }

  function scrollUp() {
    document.documentElement.scrollTop = 0
  }

  return (
    <Container fluid className={`${houseName}-container`}>
      <Link className="index-return" to={`/houses`}><GiCrossedSwords /></Link>
      {houseName === 'Unsullied' || houseName === 'Independent' || houseName === 'Dothraki' || houseName === "Night's Watch" || houseName === 'Free Folk' ? (
        <h2>{houseName}</h2>
      ) : (
        <h2>{`House ${houseName}`}</h2>
       )}

      <Row className="main-image-container" xs={12} md={12} lg={12}>
        <Col xs={12} md={12} lg={12}>
          <div className="main-image">
            <img className="crest" src={crest} alt={`Image of the ${houseName} family crest`} />
          </div>
        </Col>
      </Row>
      <Row className="split-page" xs={12} md={12} lg={12}>
        <Col className="column" xs={12} md={6} lg={6}>
          <h2>{motto}</h2>
        </Col>
        <Col className="column" xs={12} md={6} lg={6}>


          {places.length > 0 && 
          <h3>Home: {<Link onClick={scrollUp} className="family-home" to={`/places/${places[0].id}`}>{places[0].name}</Link>} </h3>}
          <p>{description}</p>



{/* 
          {house === 'Unsullied' || house === 'Independent' || house === 'Dothraki' || house === "Night's Watch" || house === 'Free Folk' ? (
        <h3>{house}</h3>
      ) : (
        <h3>{`House ${house}`}</h3>
       )} */}



        </Col>
      </Row>
      <Row className="p-5" xs={12} md={12} lg={12}>
        <Col>
          {characters.length > 0 &&
            <div className="stained-glass">
              <h3>House Members</h3>
              <div className="house-member-container">
                {characters.map((character, idx) => {
                  return <Link onClick={scrollUp} className="house-member" key={idx} to={`/characters/${character.id}`}>
                    <div>
                      <div className="individual">
                        <h2>{`${character.firstName} ${character.lastName}`}</h2>
                        <img className="individual-picture" src={character.image} alt={`Image of ${character.firstName} ${character.lastName}`} />
                      </div>
                    </div>
                  </Link>
                })}
              </div>
            </div>
          }
        </Col>
      </Row>
      <Row className="p-5" xs={12} md={12} lg={12}>
        <div className="stained-glass">
          <h3>Bannermen</h3>
          <ul>
            {bannermen.length > 0 && bannermen.map((banner, idx) => {
              return <li key={idx}>{banner}</li>
            })}
          </ul>
        </div>
      </Row>
    </Container>
  )
}