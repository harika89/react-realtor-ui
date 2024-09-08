import { Link } from 'react-router-dom';
import './pin.scss';
import { Marker,Popup } from 'react-leaflet';

function Pin({item}){
    return(
        <Marker position={[item.latitude, item.longitude]}>
        <Popup>
            <div className='popUpContainer'>
                <img src={item.img} alt='image'></img>
                <div className='textContainer'>
                    <Link to={`/${item.id}`}>{item.title}</Link> 
                    <span className='price'>$ {item.price}</span>
                </div>
            </div>
        </Popup>
        </Marker>
    )
}

export default Pin;