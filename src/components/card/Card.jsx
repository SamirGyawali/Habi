import React from 'react';
import { Link } from "react-router-dom";
import './card.scss';

const Card = (item) => {
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer"></div>
    </div>
  )
}

export default Card;