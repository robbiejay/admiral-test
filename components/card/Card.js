import React from 'react';
import './Card.css';

export const Card = ({children, background, width, border, boxShadow}) => {
  return (
    <div className='card-container'>
      <div className='card-inner-container' style={{background: background, border: border,width: width, boxShadow: boxShadow}}>
      {children}
      </div>
    </div>
  )
}

export default Card;
