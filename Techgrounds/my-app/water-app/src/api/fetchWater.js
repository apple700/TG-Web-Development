import axios from 'axios';


const URL= 'http://openweathermap.org/data/2.5/weather';
const API_Key = '576e8cf5b703dc1084a42e850c11e327';





export const fetchWater = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q:query,
            units: 'metric',
            APPID: API_Key,

        }
    });
    return data;
}

