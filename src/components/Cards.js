import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out this epic Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-9.jpg"
                        text="Explore the hiddem beauty of NFT's art"
                        label='New Art Dimension'
                        path='services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-3.jpg"
                        text="Explore the hiddem beauty of NFT's art"
                        label='New Art Dimension'
                        path='services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards 

