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
                    if (abode.characters.length === 0) {
                        return pattern.test(abode.houseName) 
                    } else if (abode.characters.length > 0) {
                        let filtArr = abode.characters.filter(char => {
                            console.log(char.firstName)
                           return char === 0
                        })
                        
                        console.log(filtArr)
                        
                        return pattern.test(abode.houseName) 
                        || pattern.test(filtArr)

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
            <h1>Filter</h1>
            <input name="search" placeholder="Search..." value={filters.search} onChange={handleSearch} />
        </>
    )
}