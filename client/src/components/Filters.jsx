/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export default function Filter({ places, setFilteredPlaces, setfilteredHouses, houses, characters, setFilteredCharacters }) {

    const [filters, setFilters] = useState({
        search: ''
    })

    function handleSearch(e) {
        const newObj = {
            ...filters,
            'search': e.target.value
        }
        setFilters(newObj)
    }

    useEffect(() => {
        const pattern = new RegExp(filters.search, 'i')
        let filteredArray
        if (places) {
            filteredArray = places.filter(place => {
                console.log(place.occupiedBy)
                return pattern.test(place.name) || pattern.test(place.occupiedBy)
            })
            setFilteredPlaces(filteredArray)


        } else if (houses) {
            filteredArray = houses.filter(abode => {

                if (abode.places.length === 0 && abode.characters.length === 0) {
                    return pattern.test(abode.houseName)
                }

                else if (abode.places.length > 0 && abode.characters.length === 0) {
                    const filtArr = abode.places.filter(place => {
                        return pattern.test(place.name)
                    })
                    return pattern.test(abode.houseName) || filtArr.length
                }

               else if (abode.characters.length > 0 && abode.places.length === 0) {
                    const filtArr = abode.characters.filter(char => {
                        return pattern.test(char.firstName)
                            || pattern.test(char.lastName) || pattern.test(`${char.firstName} ${char.lastName}`)
                    })
                    return pattern.test(abode.houseName)
                        || filtArr.length
                }

              else if (abode.characters.length > 0 && abode.places.length > 0) {
                    const filtArr = abode.places.filter(place => {
                        return pattern.test(place.name)
                    })
                    const filtArr2 = abode.characters.filter(char => {
                        return pattern.test(char.firstName)
                            || pattern.test(char.lastName) || pattern.test(`${char.firstName} ${char.lastName}`)
                    })
                    return pattern.test(abode.houseName) || filtArr.length || filtArr2.length

                }
                else if (abode.characters.length === 0) {
                    return pattern.test(abode.houseName)
                }
                else if (abode.places.length === 0) {
                    return pattern.test(abode.houseName)
                }
            })
            setfilteredHouses(filteredArray)

        } else if (characters) {
            filteredArray = characters.filter(char => {
                if (char.associatedHouse[0]) {
                    console.log(char.associatedHouse[0].houseName)
                    return pattern.test(char.firstName) ||
                        pattern.test(char.lastName) ||
                        pattern.test(char.associatedHouse[0].houseName)
                }
            })
            setFilteredCharacters(filteredArray)
        }
    }, [filters, places, setFilteredPlaces, houses, setfilteredHouses, characters, setFilteredCharacters])

    return (
        <>
            <h3>Filters</h3>
            <input className="search-bar" name="search" placeholder="Search..." value={filters.search} onChange={handleSearch} />
        </>
    )
}


// if (abode.places.length === 0) {
//     return pattern.test(abode.houseName)
// } else if (abode.places.length > 0) {
//     console.log(abode.places)
//     const filtArr = abode.places.filter(place => {
//         return pattern.test(place.name)
//     })
//     return pattern.test(abode.houseName) || filtArr.length
// }


// if (abode.characters.length === 0) {
//     return pattern.test(abode.houseName)
// } else if (abode.characters.length > 0) {
//     const filtArr = abode.characters.filter(char => {
//         return pattern.test(char.firstName)
//             || pattern.test(char.lastName)
//     })
//     return pattern.test(abode.houseName)
//         || filtArr.length
// }