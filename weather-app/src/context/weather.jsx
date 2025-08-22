import { createContext,useContext,useState } from "react";
import { getweatherdatacity,getweatherdataforlocation } from "../api";

const WeatherContext = createContext(null);

export const useweather = () => {
    return useContext(WeatherContext);
}
export const WeatherProvider = (props) => {
    const [data, setdata] = useState(null);
    const [searchcity,setsearchcity] =useState(null);


    const fetchdata = async() => {
        const response =await getweatherdatacity(searchcity);
        setdata(response);
    }

    const fetchcurrentuselocationdata =() =>{
        navigator.geolocation.getCurrentPosition((position => {
            getweatherdataforlocation(position.coords.latitude, 
                position.coords.longitude).then(data => 
                    setdata(data));
        }))
    }
  return (
    <WeatherContext.Provider value={{ searchcity, data ,setsearchcity, fetchdata, fetchcurrentuselocationdata }}>
      {props.children}
    </WeatherContext.Provider>
  );
};
