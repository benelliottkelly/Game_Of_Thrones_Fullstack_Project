/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export default function Filter({ places, setFilteredPlaces, setfilteredHouses, houses, characters, setFilteredCharacters }) {

    const [filters, setFilters] = useState({
        // houseF: '',
        // place: 'All',
        search: ''
    })

    const [housesDropDown, setHousesDropDown] = useState([])
    const [placesDropDown, setPlacesDropDown] = useState([])
    const [characterDropDown, setCharacterDropDown] = useState([])

    function handleSearch(e) {
        const newObj = {
            ...filters,
            'search': e.target.value
        }
        setFilters(newObj)
        // e.target.textContent = 'All'
    }

    useEffect(() => {
        const pattern = new RegExp(filters.search, 'i')
        let filteredArray
        if (places) {
            filteredArray = places.filter(place => {

                if (place.charactersInPlace.length === 0) {
                    return pattern.test(place.name) || pattern.test(place.occupiedBy)
                }

                else if (place.charactersInPlace.length > 0) {
                    const filtArr = place.charactersInPlace.filter(char => {
                        return pattern.test(char.firstName) || pattern.test(char.lastName) || pattern.test(`${char.firstName} ${char.lastName}`)
                    })
                    return pattern.test(place.name) || pattern.test(place.occupiedBy) || filtArr.length
                }

            })
            setFilteredPlaces(filteredArray)

            // Create Houses DropDown for Places
            if (places.length > 0 && housesDropDown.length === 0) {
                const uniqueOccupants = Array.from(new Set(places.flatMap(place => place.occupiedBy)));
                setHousesDropDown(uniqueOccupants);
            }

            // Create Places DropDown for Places
            if (places.length > 0 && placesDropDown.length === 0) {
                const placeArray = [...new Set(places.map(place => place.name))]
                setPlacesDropDown(placeArray)
            }

            // Create Character DropDown for Places
            if (places.length > 0 && placesDropDown.length === 0) {
                const uniqueCharacters = Array.from(new Set(places.flatMap(place => {
                    return place.charactersInPlace.map(char => `${char.firstName} ${char.lastName}`);
                })));
                setCharacterDropDown(uniqueCharacters);
            }



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

            // Create Houses DropDown for House Index
            if (houses.length > 0 && housesDropDown.length === 0) {
                const houseArray = [...new Set(houses.map(house => house.houseName))]
                setHousesDropDown(houseArray)
            }

            // Create Places DropDown for House Index
            if (houses.length > 0 && placesDropDown.length === 0) {
                const uniquePlaces = Array.from(new Set(houses.flatMap(house => {
                    return house.places.map(place => place.name);
                })));
                setPlacesDropDown(uniquePlaces);
            }

            // Create Character DropDown for House Index
            if (houses.length > 0 && characterDropDown.length === 0) {
                const uniqueCharacters = Array.from(new Set(houses.flatMap(house => {
                    return house.characters.map(char => `${char.firstName} ${char.lastName}`);
                })));
                setCharacterDropDown(uniqueCharacters);
            }


        } else if (characters) {
            filteredArray = characters.filter(char => {
                if (char.associatedHouse[0]) {
                    console.log(char.associatedHouse[0].houseName)
                    return pattern.test(char.firstName) ||
                        pattern.test(char.lastName) ||
                        pattern.test(char.associatedHouse[0].houseName) ||
                        pattern.test(`${char.firstName} ${char.lastName}`) ||
                        pattern.test(char.hometown)
                }
            })
            setFilteredCharacters(filteredArray)

            // Create Houses DropDown for Character Index
            if (characters.length > 0 && housesDropDown.length === 0) {
                const houseArray = [...new Set(characters.map(char => char.house))]
                setHousesDropDown(houseArray)
            }

            // Create Places DropDown for Character Index
            if (characters.length > 0 && placesDropDown.length === 0) {
                const placeArray = [...new Set(characters.map(char => char.hometown))]
                setPlacesDropDown(placeArray)
            }

            // Create Character DropDown for Character Index
            if (characters.length > 0 && characterDropDown.length === 0) {
                const charArray = [...new Set(characters.map(char => { return (`${char.firstName} ${char.lastName}`) }))]
                setCharacterDropDown(charArray)
            }

        }


    }, [filters, places, setFilteredPlaces, houses, setfilteredHouses, characters, setFilteredCharacters, housesDropDown, placesDropDown, characterDropDown])

    return (
        <>
            <h5 className="main-title">Filters</h5>
            <input className="search-bar" name="search" placeholder="Search..." value={filters.search} onChange={handleSearch} />

            {/* Houses DropDown */}
            <h6 className="drop-title">Search By House</h6>
            <select className="drop house-drop" name="house" onChange={handleSearch}>
                <option value=''>All Houses</option>
                {housesDropDown.length > 0 &&
                    housesDropDown.map((house, idx) => {
                        return <option key={idx} value={house}>{house}</option>
                    })}
            </select>

            {/* Places DropDown */}
            <h6 className="drop-title">Search By Place</h6>
            <select className="drop place-drop" name="place" onChange={handleSearch}>
                <option value=''>All Places</option>
                {placesDropDown.length > 0 &&
                    placesDropDown.map((place, idx) => {
                        return <option key={idx} value={place}>{place}</option>
                    })}
            </select>

            {/* Characters DropDown */}
            <h6 className="drop-title">Search By Character</h6>
            <select className="drop character-drop" name="character" onChange={handleSearch}>
                <option value=''>All Characters</option>
                {characterDropDown.length > 0 &&
                    characterDropDown.map((char, idx) => {
                        return <option key={idx} value={char}>{char}</option>
                    })}
            </select>
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