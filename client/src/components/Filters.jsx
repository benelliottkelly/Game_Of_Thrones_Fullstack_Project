import { useEffect, useState } from "react"



export default function Filter({ places, setFilteredPlaces, setfilteredHouses, houses }) {

    const [filters, setFilters] = useState({
        search: ''
    })


    function handleSearch(e) {
        const newObj = {
            ...filters, 
            'search': e.target.value
        }
        setFilters(newObj)
        console.log(e.target.name)
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
                return pattern.test(house.houseName)
            })
            setfilteredHouses(filteredArray)
        }
        
    }, [filters, places, setFilteredPlaces, houses, setfilteredHouses])

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