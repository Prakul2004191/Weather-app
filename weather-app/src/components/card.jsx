import React from 'react';
import { useweather } from '../context/weather';

const Card =() => {
    const weather = useweather();
    return (
        <div className='card'>
            <img src={weather.data?.current?.condition?.icon} />
           <h2 className="temperature"> {weather.data?.current?.temp_c} <span>°C</span></h2>
       <h5>{weather.data?.location?.name}, {weather.data?.location?.region}, {weather.data?.location?.country}</h5>
        </div>
    )
}

export default Card;
