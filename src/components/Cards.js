import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

import travelImg from '../images/img-9.jpg'
import travelImg1 from '../images/img-2.jpg'

const Cards = () => {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destination!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                         src={travelImg}
                         text='Explore the hidden waterfall deep inside the Amazon jungle'
                         label='Adventure'
                         path='/services'
                        />
                        <CardItem
                         src={travelImg1}
                         text='Travel through the Islands of bali in a private cruise'
                         label='Luxury'
                         path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                         src={travelImg}
                         text='Explore the hidden waterfall deep inside the Amazon jungle'
                         label='Adventure'
                         path='/services'
                        />
                        <CardItem
                         src={travelImg}
                         text='Explore the hidden waterfall deep inside the Amazon jungle'
                         label='Adventure'
                         path='/services'
                        />
                        <CardItem
                         src={travelImg1}
                         text='Travel through the Islands of bali in a private cruise'
                         label='Luxury'
                         path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;