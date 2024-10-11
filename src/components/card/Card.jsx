import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './card.scss';

// bedroom = water, bathroom = waste

const Card = ({item}) => {
  const [isImageClicked, setIsImageClicked] = useState(false);
  const handleImageClick = ()=>{
    setIsImageClicked(!isImageClicked)
  }
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
              <img src="/water1.png" alt="" />
              <span>{item.water}</span>
            </div>
            <div className="feature">
              <img src="/waste1.png" alt="" />
              <span>{item.waste}</span>
            </div>
            <div className="feature">
              <img src="/power.png" alt="" />
              <span>{item.power}</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon" onClick={handleImageClick}>
              <img src={isImageClicked ? "/redHeart.png" : "/save1.png"} alt="" />
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