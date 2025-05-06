import Home from './Home.jsx';

export async function fetchData(cityName){
    const KEY="e5e14732eeff4d03b1222944250605";
    const URL=`http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${cityName}`;

    try{
    const response = await fetch(URL);
    const data= await response.json();
    console.log(data);
        if(data.error){
            throw new Error("Enter valid city name");
        }
        return data;
    }catch(error){
        console.log(error);
        throw error;
    }
}