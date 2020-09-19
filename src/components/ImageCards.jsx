import React, {useState} from 'react';
import '../css/ImageCards.css';

function ImageCards() {
    const [cartoon, setCartoon]= useState([
        {
            name: 'Johnny Bravo',
            url: "https://cdn.worldvectorlogo.com/logos/johnny-bravo-2.svg",
        },
    ])
    return (
        <div className='imageCards'>
            {cartoon.map((cartoon) => (
                <h1>{cartoon.name}</h1>
            ))}
            
        </div>
    )
}

export default ImageCards