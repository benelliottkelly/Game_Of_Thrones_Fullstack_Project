import { useLoaderData, useNavigation } from 'react-router-dom'
import { useEffect } from 'react'


export default function AllPlaces() {

    const navigation = useNavigation()
    const houses = useLoaderData()

    useEffect(() => {
        console.log(houses)
    }, [houses])

    return (
        <>
            <h1>All Houses</h1>
            <section className="card-layout">
                {houses.map(house => {
                    return (
                        <>
                            <div className="card" key={house.id}>
                                <img className="card-img-top" src={house.crest} alt="Crest Image" />
                                <div className="card-body">
                                    <h5 className="card-title">{house.houseName}</h5>
                                    <p className="card-text">{house.motto}</p>
                                </div>
                            </div>
                        </>
                    )
                })
                }
            </section>
        </>
    )
}