import { useLoaderData, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Filter from './Filters'
import Card from 'react-bootstrap/Card'

export default function AllHouses() {

    const [houses, setHouses] = useState([])
    const [filteredHouses, setfilteredHouses] = useState([])

    function scrollUp() {
        document.documentElement.scrollTop = 0
    }

    const abode = useLoaderData()

    useEffect(() => {
        setHouses(abode)
    }, [abode])

    let toggle = false

    function changeView() {
        const view = document.getElementById('view')
        toggle = !toggle
        if (toggle) {
            view.classList.remove('house-card-layout')
            view.classList.add('squish-house-card-layout')
        } else if (!toggle) {
            view.classList.remove('squish-house-card-layout')
            view.classList.add('house-card-layout')
        }
    }

    return (
        <>
            <div className='houses-container'>
                <div className="header">
                    <button onClick={changeView}>Change View</button>
                    <h1>All Houses</h1>
                </div>

                <Container fluid>
                    <Col>
                        <Row className="house-org">
        
                                <section className="house-card-layout" id="view">
                                    <Filter houses={houses} setfilteredHouses={setfilteredHouses} />
                                    {filteredHouses.map(house => {
                                        return (
                                            <>
                                                <Link onClick={scrollUp} key={house.id} to={`/houses/${house.id}`} style={{
                                                    textDecoration: 'none',
                                                    color: 'black'
                                                }}>
                                                    <Card className="card" id="house-card">
                                                        <Card.Img variant="top" className="card-img-top" src={house.crest} alt="Crest Image" />
                                                        <Card.Body className="card-body">
                                                            <Card.Title className="card-title">{house.houseName}</Card.Title>
                                                            <Card.Text className="card-text"><h6>{house.motto}</h6></Card.Text >
                                                        </Card.Body>
                                                    </Card>
                                                </Link>
                                            </>
                                        )
                                    })
                                    }
                                </section>
                            </Row>


                  

                    </Col>
                </Container>
            </div>
        </>
    )
}