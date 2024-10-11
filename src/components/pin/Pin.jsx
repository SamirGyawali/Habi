import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import './pin.scss';

const Pin = ({item})=>{
    return(
        <Marker position={[item.latitude, item.longitude]}>
        <Popup>
          <div className="popupContainer">
            <img src={item.img} alt="" />
            <div className="textContainer">
                <Link to={`/${item.id}`}>{item.title}</Link>
                <span className='features'>
                    <span> Water <b>{item.water}</b>,</span>
                    <span> Waste <b>{item.waste}</b></span>
                </span>
                <b className='price'>NRP {item.price}</b>
            </div>
          </div>
        </Popup>
      </Marker>
    )
}

export default Pin;