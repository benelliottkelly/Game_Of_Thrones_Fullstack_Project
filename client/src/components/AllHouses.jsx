import { useLoaderData, useNavigation, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Filter from './Filters'

export default function AllHouses() {

    const [ houses, setHouses ] = useState([])
    const [ filteredHouses, setfilteredHouses ] = useState([])

    const navigation = useNavigation()
    const abode = useLoaderData()

    useEffect(() => {
        setHouses(abode)
    }, [abode])

    return (
        <>
            <h1>All Houses</h1>
            <Container fluid>
                <Row>
                    <Col
                        xs={4}
                        md={3}
                        lg={3}><Filter houses={houses} setfilteredHouses={setfilteredHouses} /></Col>
                    <Col>
                        <section className="card-layout">
                            {filteredHouses.map(house => {
                                return (
                                    <>
                                        <Link to={`/houses/${house.id}`} style={{
                                            textDecoration: 'none',
                                            color: 'black'
                                        }}>
                                            <div className="card" key={house.id}>
                                                <img className="card-img-top" src={house.crest} alt="Crest Image" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{house.houseName}</h5>
                                                    <p className="card-text">{house.motto}</p>
                                                </div>
                                            </div>
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