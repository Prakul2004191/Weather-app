const baseURL =
"https://api.weatherapi.com/v1/current.json?key=47c057629a3e48a3bdf173820251608";

export const getweatherdatacity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    const data = await response.json();
    return data;
}
export const getweatherdataforlocation = async (lat, lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    const data = await response.json();
    return data;
}