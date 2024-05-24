"use client"

const Gallery = ({ favorites, quick, light, special }: { favorites: boolean, quick: boolean, light: boolean, special: boolean}) => {
    const data = {
        food1: {name: "Alfredo", favorites: true, quick: true, light: false, special: false},
        food2: {name: "Shrimp Cocktail", favorites: false, quick: true, light: true, special: true},
        food3: {name: "Coffee", favorites: false, quick: true, light: true, special: false},
        food4: {name: "Eggs", favorites: false, quick: true, light: true, special: false},
        food5: {name: "Lucky Lunch", favorites: true, quick: false, light: false, special: true},
        food6: {name: "Rock Candy", favorites: true, quick: false, light: false, special: true},
    }

    return (
        <div className="wrapper">
            { favorites ? Object.values(data).map((item, index) => (
                item.favorites === favorites ? <div className="flex justify-center items-center" key={index}>{item.name}</div> : null
            )) : Object.values(data).map((item, index) => (
                <div className="flex justify-center items-center" key={index}>{item.name}</div>
            ))}
        </div>
    )
}

export default Gallery;