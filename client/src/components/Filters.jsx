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
                return pattern.test(place.name) || pattern.test(place.occupiedBy)
            })
            setFilteredPlaces(filteredArray)


        } else if (houses) {
            filteredArray = houses.filter(house => {
                if (house.characters) {
            
                    const filteredChars = house.characters.filter(char => {
                        return pattern.test(char.firstName) || 
                        pattern.test(char.lastName)
                    })
                    if (filteredChars.length > 0) {
                        house.characters = filteredChars
                        return true
                    }
                }
                // if (house.occupiedBy) {
                //     const filteredPlaces = house.occupiedBy.filter(place => {
                //         console.log(place)
                //     })
                // }
                return pattern.test(house.houseName)
            })
            setfilteredHouses(filteredArray)


        } else if (characters) {
            filteredArray = characters.filter(char => {
                if (char.associatedHouse[0]) {
                    return pattern.test(char.firstName) ||
                        pattern.test(char.lastName) ||
                        pattern.test(char.associatedHouse[0].houseName)
                }
            })
            setFilteredCharacters(filteredArray)
        }
    }, [filters, places, setFilteredPlaces, houses, setfilteredHouses, characters, setFilteredCharacters])

    // useEffect(() => {
    //     const pattern2 = new RegExp(filters.search, 'i')
    //     const filteredHouseArray = houses.filter(house => {
    //         return pattern2.test(house.houseName)
    //     })
    //     setfilteredHouses(filteredHouseArray)
    // }, [filters, houses, setfilteredHouses])


    // const houseObj = {
    //     ...filters,
    //     [e.target.houseName]: e.target.value
    // }
    // setFilters(houseObj)

    return (
        <>
            <h1>Filter</h1>
            <input name="search" placeholder="Search..." value={filters.search} onChange={handleSearch} />
        </>
    )
}