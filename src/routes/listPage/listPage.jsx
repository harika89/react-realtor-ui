import React from 'react';
import './listPage.scss'
import { Outlet } from 'react-router-dom';
import {listData} from '../../lib/dummydata';
import Filter from '../../components/filter/filter';
import Card from '../../components/card/card';
import Map from '../../components/map/Map';

function ListPage() {
  const data = listData;

  return (
    <div className='listPage'>
      <div className='listContainer'>
        <div className='wrapper'>
          <Filter />
          {data.map(item => (
            <Card key={item.id} item={item} /> // Ensure Card is returned here
          ))}
        </div>
      </div>
      <div className='mapContainer'>
          <Map />
      </div>
    </div>
  );
}

export default ListPage;
