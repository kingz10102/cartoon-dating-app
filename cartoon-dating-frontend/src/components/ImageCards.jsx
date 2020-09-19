import React, {useState} from 'react';
import TinderCard from "react-tinder-card";
import '../css/ImageCards.css';

function ImageCards() {
    const [cartoon, setCartoon]= useState([
        {
            name: 'Johnny Bravo',
            url: "https://cdn.worldvectorlogo.com/logos/johnny-bravo-2.svg",
        },
        {
            name: 'Daria',
            url: "https://thefullest.com/wp-content/uploads/2018/05/Daria-Header.jpg",
        },
    ]);

    // Swiping functio---> console.log is for debugging 
    const swiped = (direction, nameToDelete) => {
        console.log("bounce out:" + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + 'walked off the screen!')
    }

    return (
        <div className='imageCards'>
            <div className="imageCards__cardWrapper">
            {cartoon.map((cartoon) => (
                <TinderCard
                    className='swipe'
                    key={cartoon.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, cartoon.name)}
                    onCardLeftScreen={() => outOfFrame(cartoon.name)}>

                <div 
                style={{ backgroundImage: `url(${cartoon.url})`}} 
                className="card">
                    <h3>{cartoon.name}</h3>
                </div>


                </TinderCard>
            ))}
           </div> 
        </div>
    )
}

export default ImageCards