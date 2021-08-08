import React from 'react'
import { fetchWater } from './api/fetchWater';
import { useState } from "react";


const App = () => {
    const[query, setQuery] = useState('');
    const[weather,setWeather]= useState({});


    const search = async(e) => {
        if(e.key === 'Enter') {
            const data = await fetchWater(query)
            setWeather(data);
            setQuery('');
            console.log(fetchWater)

        }
    }

    return (
    
        <div className="main-contaier">
            <input type="text" className="search" placeholder="Search ..." value={query}
             onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
             {weather.main && (
                 <div className= "city">
                 <h2 className="city-name">
                <span>{weather.name}</span>
                <sup>{weather.sys.country}</sup>

</h2>

                <div className="city-temp" >
                    {Math.round(weather.main.temp)}
                    <sup>&deg;C</sup>
                    </div>




</div>
             )}


            
        



        </div>
    );
}
export default App;