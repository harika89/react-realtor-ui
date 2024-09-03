import React from 'react';
import './card.scss'

function Card({ item }) {
    return (
      <div className='card'>Card
        {/* Use item properties to display content */}
        {/* <h3>{item.title}</h3>
        <p>{item.description}</p> */}
        {/* Add more item properties as needed */}
      </div>
    );
  }

export default Card;