"use client"

const Gallery = ({ favorites, quick, light, special }: { favorites: boolean, quick: boolean, light: boolean, special: boolean}) => {
    const data = [
        {name: "Alfredo",         favorites: true,  quick: true,  light: false, special: false},
        {name: "Shrimp Cocktail", favorites: false, quick: true,  light: true,  special: true},
        {name: "Coffee",          favorites: false, quick: true,  light: true,  special: false},
        {name: "Eggs",            favorites: false, quick: true,  light: true,  special: false},
        {name: "Lucky Lunch",     favorites: true,  quick: false, light: false, special: true},
        {name: "Rock Candy",      favorites: true, quick: false, light: false, special: true},
    ]

    const filters = Object.entries({ favorites: favorites, quick: quick, light: light, special: special }).filter((item) => item[1] === true)

    const checkData = (dataEntry) => {
        for (let i=0; i<filters.length; i++) {
            if (dataEntry[filters[i][0]] !== true) 
                return false
        }
        return true
    }

    const filteredData = data.filter(checkData)

    return (
        <div className="wrapper">
            {filteredData.map((element, index) => (
                <div className="flex justify-center items-center" key={index}>{element.name}</div>
            ))}
        </div>
    )
}

export default Gallery;