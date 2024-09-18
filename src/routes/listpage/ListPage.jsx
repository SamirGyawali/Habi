import React from 'react';
import "./ListPage.scss";
import { listData } from '../../components/lib/data';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import MyMap from '../../components/map/MyMap';


const ListPage = () => {
  const data = listData;
  return (
    <div className='listPage'>
        <div className="listContainer">
          <div className="wrapper">
            <Filter />
            {data.map(item=>(
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="mapContainer">
          <MyMap items={data}/>
        </div>
    </div>
  )
}

export default ListPage;