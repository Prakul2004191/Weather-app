import { useEffect } from 'react';
import Card from './components/card';
import Input from './components/input';
import Button from './components/button';
import { useweather } from './context/weather';
import './App.css';

function App() {
  const weather = useweather();
  console.log(weather);

  useEffect(() => {
    weather.fetchcurrentuselocationdata()
  },[]);

  return (
    <div className="App">
      <h1>Weather Forecast </h1>
      <Input placeholder="Enter city name" />
      <Button onClick={weather.fetchdata} value="search" />
      <Card />
      <Button value="refresh" />
    </div>
  );
}

export default App;
