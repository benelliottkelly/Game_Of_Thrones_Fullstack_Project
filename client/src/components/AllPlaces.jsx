import { useLoaderData, useNavigation, Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function AllPlaces() {

    const navigation = useNavigation()
    const places = useLoaderData()

    useEffect(() => {
        console.log(places)
    }, [places])

    return (
        <>
            <h1>All Places</h1>
            <section className="card-layout">
                {places.map(place => {
                    return (
                        <>
                            <Link to={`/places/${place.id}`} style={{
                                textDecoration: 'none',
                                color: 'black'
                            }}>
                                <div className="card" key={place.id}>
                                    <img className="card-img-top" src={place.image} alt="Place Image" />
                                    <div className="card-body">
                                        <h5 className="card-title">{place.name}</h5>
                                        <p className="card-text">{place.region}</p>
                                    </div>
                                </div>
                            </Link>
                        </>
                    )
                })
                }
            </section>
        </>
    )
}