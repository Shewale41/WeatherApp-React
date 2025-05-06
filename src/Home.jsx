import React,{useState} from 'react';
import {fetchData} from './myApi.js';

function Home() {
  const [cityName,setCityName] = useState("");
  const [weatherData,setWeatherData] = useState(null);
  const [error,setError] = useState(null);
     
    const getData= async ()=>{
        if(!cityName){
           setError("City name cannot be Empty");
          return;
        }
        try{
        const newData= await fetchData(cityName);
        setWeatherData(newData);
        setError(null);
        }catch(err){
          setError(err.message);
          setWeatherData(null);
        }
    };
  return (
    <>
      <div className="super-container">
        <div className="search-container">
          <input 
            type="text"
            placeholder="Enter City Name"
            className="search-box"
            onChange={(e)=>{
              setCityName(e.target.value);
            }}
          ></input>
          <button onClick={()=>getData()}> 🔍 </button>
        </div>
        <div className="card">
        {error && <p>{error}</p>}

        {weatherData && (
        <div className="card-container">
            <img src={weatherData.current.condition.icon}></img>
            <h1>{weatherData.location.name}</h1>
            <h2>{weatherData.current.temp_c}°C</h2>
            <h2>{weatherData.current.condition.text}</h2>
         </div>)}
         </div>
      </div>
    </>
  );
}

export default Home;
