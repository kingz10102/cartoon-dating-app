import React, {useState, useEffect} from 'react';
import TinderCard from "react-tinder-card";
import axios from '../axios';
import '../css/ImageCards.css';

function ImageCards() {
    const [cartoon, setCartoon]= useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/cartoondating/cards');

            setCartoon(req.data);
        }

        fetchData();
    },[]);

    console.log(cartoon);

       
    
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
                style={{ backgroundImage: `url(${cartoon.imgUrl})`}} 
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