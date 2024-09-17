import React from 'react';
import { Link } from "react-router-dom";
import './card.scss';

const Card = ({item}) => {
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <div>
          <h2 className='title'>
            <Link to={`/${item.id}`}>{item.title}</Link>
          </h2>
          <p className="address">
            <img src="/pin.png" alt="" />
            <span>{item.address}</span>
          </p>
        </div>
        <p className='price'>NRP {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed1.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/dish.png" alt="" />
              <span>{item.bathroom} kitchen</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save1.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;