import { useLoaderData, useNavigation, Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function AllCharacters() {

    const navigation = useNavigation()
    const characters = useLoaderData()

    useEffect(() => {
        console.log(characters)
    }, [characters])

    return (
        <>
            <h1>All Characters</h1>
            <section className="card-layout">
                {characters.map(character => {
                    return (
                        <>
                       <Link to={`/characters/${character.id}`} style={{
                                textDecoration: 'none',
                                color: 'black'
                            }}>
                            <div className="card" key={character.id}>
                                <img className="card-img-top" src={character.image} alt="Character Image" />
                                <div className="card-body">
                                    <h5 className="card-title">{`${character.firstName} ${character.lastName}`}</h5>
                                    <p className="card-text">{character.hometown}</p>
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