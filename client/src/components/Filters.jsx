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

    const [selectedPlace, setSelectedPlace] = useState('')
    const [selectedHouse, setSelectedHouse] = useState('')
    const [selectedCharacter, setSelectedCharacter] = useState('')





    function handleSearch(e) {
        const searchValue = e.target.value
        const cleanSearch = searchValue.replace(/[^\w\s]/gi, '')
        const newObj = {
            ...filters,
            'search': cleanSearch
        }
        setFilters(newObj)
    }

    // useEffect(() => {
    //     if (filters.search !== prevSearchValue) {
    //         clearHouse()
    //         clearPlace()
    //         clearCharacter()
    //         setPrevSearchValue(filters.search)
    //     }

    // }, [filters.search, prevSearchValue])

    function resetFilters() {
        setFilters({ search: '' })
        setPlacesDropDown([])
        setCharacterDropDown([])
        setHousesDropDown([])
        setSelectedPlace('')
        setSelectedHouse('')
        setSelectedCharacter('')
    }

    function clearHouse() {
        setSelectedHouse('')
        setHousesDropDown([])
    }

    function clearPlace() {
        setSelectedPlace('')
        setPlacesDropDown([])
    }

    function clearCharacter() {
        setSelectedCharacter('')
        setCharacterDropDown([])
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

            // Create Places DropDown for Places
            if (places.length > 0 && placesDropDown.length === 0) {
                const placeArray = [...new Set(places.map(place => place.name))]
                setPlacesDropDown(placeArray)
            }

            // Create Houses DropDown for Places
            if (places.length > 0 && housesDropDown.length === 0) {
                const uniqueOccupants = Array.from(new Set(places.flatMap(place => place.occupiedBy)));
                setHousesDropDown(uniqueOccupants)
            }


        } else if (houses) {
            let filteredHouses = []
            filteredHouses = houses.filter(abode => {

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
            setfilteredHouses(filteredHouses)

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
                if (char.hometown) {
                    if (char.associatedHouse[0]) {
                        return pattern.test(char.firstName) ||
                            pattern.test(char.lastName) ||
                            pattern.test(char.associatedHouse[0].houseName) ||
                            pattern.test(`${char.firstName} ${char.lastName}`) ||
                            pattern.test(char.hometown)
                    }
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
            {places && (
                <article className="filter-container">
                    <h5 className="main-title">Filters</h5>
                    <input className="search-bar" name="search" placeholder="Search..." value={filters.search} onChange={(e) => {
                        console.log('clack')
                        handleSearch(e)
                        clearCharacter()
                        clearHouse()
                        clearPlace()
                    }} />
                    {/* Places DropDown */}
                    <h6 className="drop-title">Search By Place</h6>
                    <select className="drop place-drop" name="place" onChange={(e) => {
                        setSelectedPlace(e.target.value)
                        handleSearch(e)
                        clearHouse()
                    }}
                        value={selectedPlace}>
                        <option value=''>All Places</option>
                        {placesDropDown.length > 0 &&
                            placesDropDown.map((place, idx) => {
                                return <option key={idx} value={place}>{place}</option>
                            })}
                    </select>
                    {/* Houses DropDown */}
                    <h6 className="drop-title">Search By House</h6>
                    <select className="drop house-drop" id="house-id" name="house" onChange={(e) => {
                        setSelectedHouse(e.target.value)
                        handleSearch(e)
                        clearPlace()
                    }}
                        value={selectedHouse}>
                        <option value=''>All Houses</option>
                        {housesDropDown.length > 0 &&
                            housesDropDown.map((house, idx) => {
                                return <option key={idx} value={house}>{house}</option>
                            })}
                    </select>

                    <button onClick={resetFilters}>Clear</button>
                </article>
            )}
            {houses && (
                <article className="filter-container">
                    <h5 className="main-title">Filters</h5>
                    <input className="search-bar" name="search" placeholder="Search..." value={filters.search} onChange={handleSearch} />

                    {/* Houses DropDown */}
                    <h6 className="drop-title">Search By House</h6>
                    <select className="drop house-drop" id="house-id" name="house" onChange={(e) => {
                        setSelectedHouse(e.target.value)
                        handleSearch(e)
                        clearPlace()
                    }}
                        value={selectedHouse}>
                        <option value=''>All Houses</option>
                        {housesDropDown.length > 0 &&
                            housesDropDown.map((house, idx) => {
                                return <option key={idx} value={house}>{house}</option>
                            })}
                    </select>

                    {/* Places DropDown */}
                    <h6 className="drop-title">Search By Place</h6>
                    <select className="drop place-drop" name="place" onChange={(e) => {
                        setSelectedPlace(e.target.value)
                        handleSearch(e)
                        clearHouse()
                    }}
                        value={selectedPlace}>
                        <option value=''>All Places</option>
                        {placesDropDown.length > 0 &&
                            placesDropDown.map((place, idx) => {
                                return <option key={idx} value={place}>{place}</option>
                            })}
                    </select>

                    <button onClick={resetFilters}>Clear</button>
                </article>
            )}

            {characters && (
                <article className="filter-container">
                    <h5 className="main-title">Filters</h5>
                    <input className="search-bar" name="search" placeholder="Search..." value={filters.search} onChange={(e) => {
                        console.log('clack')
                        handleSearch(e)
                        clearCharacter()
                        clearHouse()
                        clearPlace()
                    }} />

                    {/* Characters DropDown */}
                    <h6 className="drop-title">Search By Character</h6>
                    <select className="drop character-drop" name="character" onChange={(e) => {
                        setSelectedCharacter(e.target.value)
                        handleSearch(e)
                        clearPlace()
                    }}
                        value={selectedCharacter}>
                        <option value=''>All Characters</option>
                        {characterDropDown.length > 0 &&
                            characterDropDown.map((char, idx) => {
                                return <option key={idx} value={char}>{char}</option>
                            })}
                    </select>

                    {/* Places DropDown */}
                    <h6 className="drop-title">Search By Place</h6>
                    <select className="drop place-drop" name="place" onChange={(e) => {
                        setSelectedPlace(e.target.value)
                        handleSearch(e)
                        clearCharacter()
                    }}
                        value={selectedPlace}>
                        <option value=''>All Places</option>
                        {placesDropDown.length > 0 &&
                            placesDropDown.map((place, idx) => {
                                return <option key={idx} value={place}>{place}</option>
                            })}
                    </select>

                    <button className="reset-button" onClick={resetFilters}>Clear</button>

                </article>
            )}


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

//document.querySelector(select).map( selectBar => { selectBar.ID != e.target.ID  && selectBar.value == “All Places”})