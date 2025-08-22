import React from 'react';
import { useweather } from '../context/weather';

const Input = () => {
    const weather = useweather();
    console.log("Weather", weather);
    return (
        <input 
        className="input-field"
        placeholder="Search city..."
        value={weather.searchcity || ""} 
        onChange={(e) => weather.setsearchcity(e.target.value)} 
        />
    )
}

export default Input;