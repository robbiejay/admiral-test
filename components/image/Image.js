import React from 'react';
import './Image.css';

export const Image = (props) => {
  return (
    <div className='image-container' style={{width: props.width}}>
      <img style={{...props.sx}} src={props.src} />
    </div>
  )
}

export default Image;
