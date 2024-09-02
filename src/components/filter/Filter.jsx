import React from 'react'
import './filter.scss'

const Filter = () => {
  return (
    <div className='filter'>
        <h4> Search results for <b>Samakhushi</b></h4>
        <div className="top">
            <div className="item">
                <label className="city">Location</label>
                <input type="text" id='city' name='city' placeholder='City Location' />
            </div>
        </div>
        <div className="bottom">
            <div className="item">
                <label htmlFor='type' className="city">Type</label>
                <select id='type' name='type'>
                    <option value="">any</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="property">Property</label>
                <select name="property" id='property' >
                    <option value="">any</option>
                    <option value="apartment">Apartment</option>
                    <option value="room">Room</option>
                    <option value="house">House</option>
                    <option value="land">Land</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="minPrice">Min Price</label>
                <input type="number" id='minPrice' name='minPrice'/>
            </div>
            <div className="item">
                <label htmlFor="maxPrice">Max Price</label>
                <input type="number" id='maxPrice' name='maxPrice' />
            </div>
            <div className="item">
                <label htmlFor="bedroom">Bedroom</label>
                <input type="text" id='bedroom' name='bedroom' placeholder='any' />
            </div>
            <button>
                <img src="/search.png" alt="" />
            </button>
        </div>
    </div>
  )
}
export default Filter;
