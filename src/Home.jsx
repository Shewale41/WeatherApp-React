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
            <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
    rel="stylesheet"
/>
            <svg  className="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5 17H4V15H10.5C12.433 15 14 16.567 14 18.5C14 20.433 12.433 22 10.5 22C8.99957 22 7.71966 21.0559 7.22196 19.7293L9.09513 19.0268C9.30843 19.5954 9.85696 20 10.5 20C11.3284 20 12 19.3284 12 18.5C12 17.6716 11.3284 17 10.5 17ZM5 11H18.5C20.433 11 22 12.567 22 14.5C22 16.433 20.433 18 18.5 18C16.9996 18 15.7197 17.0559 15.222 15.7293L17.0951 15.0268C17.3084 15.5954 17.857 16 18.5 16C19.3284 16 20 15.3284 20 14.5C20 13.6716 19.3284 13 18.5 13H5C3.34315 13 2 11.6569 2 10C2 8.34315 3.34315 7 5 7H13.5C14.3284 7 15 6.32843 15 5.5C15 4.67157 14.3284 4 13.5 4C12.857 4 12.3084 4.40463 12.0951 4.97317L10.222 4.27073C10.7197 2.94414 11.9996 2 13.5 2C15.433 2 17 3.567 17 5.5C17 7.433 15.433 9 13.5 9H5C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11Z"></path></svg>
            <svg className="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4H8V6H4V4ZM16 19H20V21H16V19ZM2 9H12V11H2V9ZM14 9H20V11H14V9ZM4 14H10V16H4V14ZM12 14H22V16H12V14ZM10 4H22V6H10V4ZM2 19H14V21H2V19Z"></path></svg>
         </div>)}
         </div>
      </div>
    </>
  );
}

export default Home;
