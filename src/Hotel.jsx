import React from 'react';
import "./App.css";


const Hotel = ({img, name, desc}) => {
  return (
    <div className='hotelCards'>
        <img src={img} alt="" />
        <h2 className='name'>{name}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default Hotel;