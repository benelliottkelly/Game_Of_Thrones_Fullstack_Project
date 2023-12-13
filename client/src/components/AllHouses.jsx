import { useLoaderData, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Filter from './Filters'
import Card from 'react-bootstrap/Card'

export default function AllHouses() {

    const [ houses, setHouses ] = useState([])
    const [ filteredHouses, setfilteredHouses ] = useState([])


    const abode = useLoaderData()

    useEffect(() => {
        setHouses(abode)
    }, [abode])

    return (
        <>
            <h1>All Houses</h1>
            <Container fluid>
            <Row className="filter-row">
                    <Col
                        xs={4}
                        md={3}
                        lg={3} 
                        className="filter">
                            <Filter houses={houses} setfilteredHouses={setfilteredHouses}/>
                            <div className="vert-banner"></div>
                            </Col>
                    <Col>
                        <section className="card-layout">
                            {filteredHouses.map(house => {
                                return (
                                    <>
                                        <Link key={house.id} to={`/houses/${house.id}`} style={{
                                            textDecoration: 'none',
                                            color: 'black'
                                        }}>
                                            <Card className="card">
                                                <Card.Img variant="top" className="card-img-top" src={house.crest} alt="Crest Image" />
                                                <Card.Body className="card-body">
                                                    <Card.Title className="card-title">{house.houseName}</Card.Title>
                                                    <Card.Text className="card-text">{house.motto}</Card.Text >
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
            </Container>
        </>
    )
}