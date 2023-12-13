import { useLoaderData, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Filter from './Filters'
import Card from 'react-bootstrap/Card'

export default function AllCharacters() {

    const [ characters, setCharacters ] = useState([])
    const [ filteredCharacters, setFilteredCharacters ] = useState([])

    const people = useLoaderData()

    function scrollUp() {
        document.documentElement.scrollTop = 0
      }

    useEffect(() => {
        setCharacters(people)
        console.log(characters)
    }, [people, characters])

    return (
        <>
            <h1>All Characters</h1>
            <Container fluid>
                <Row className="filter-row">
                    <Col
                        xs={12}
                        md={6}
                        lg={3} 
                        className="filter">
                            <Filter characters={characters} setFilteredCharacters={setFilteredCharacters} />
                            <div className="vert-banner"></div>
                            </Col>
                    <Col>
                        <section className="card-layout">
                            {filteredCharacters.map(character => {
                                return (
                                    <>
                                        <Link onClick={scrollUp} key={character.id} to={`/characters/${character.id}`} style={{
                                            textDecoration: 'none',
                                            color: 'black'
                                        }}>
                                           <Card className="card" >
                                                <Card.Img variant="top" className="card-img-top" src={character.image} alt="Crest Image" />
                                                <Card.Body className="card-body">
                                                    <Card.Title className="card-title">{`${character.firstName} ${character.lastName}`}</Card.Title>
                                                    <Card.Text className="card-text">{character.house}</Card.Text >
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </>
                                )
                            })
                            }
                        </section>
                    </Col>
                </Row>
            </Container >
        </>
    )
}