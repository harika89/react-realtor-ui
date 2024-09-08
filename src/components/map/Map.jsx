import { MapContainer, TileLayer } from 'react-leaflet';
import './map.scss';
import "leaflet/dist/leaflet.css";
import {listData} from '../../lib/dummydata';
import Pin from '../pin/Pin';
import { render } from 'react-dom';



function Map(){
    const data = listData;

    return (
      <MapContainer center={[52.4797, -1.90269]} zoom={7} scrollWheelZoom={false} className='map'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

{data.map(item => (
            <Pin key={item.id} item={item} /> // Ensure Card is returned here
          ))}

    </MapContainer>
    )
  }

export default Map;