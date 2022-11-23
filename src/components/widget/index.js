import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.scss';

function Widget({ city, zipcode }) {
  const [temp, setTemp] = useState(0);
  const [icon, setIcon] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    /*
    si je suis en dev j'interroge urlAPIdev
    si je suis en prod j'interroge urlAPIprod
    */
    let urlAPI;
    if(process.env.NODE_ENV === 'development') {
      urlAPI = process.env.REACT_APP_API_URL_PROD;
    }
    else if(process.env.NODE_ENV === 'production') {
      urlAPI = process.env.REACT_APP_API_URL_DEV;
    }
    // appel API 
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},fr&appid=${API_KEY}&units=metric`)
      .then((response) => {
        console.log(response);
        // on veut stocker la température récupérée de l'API
        setTemp(Math.round(response.data.main.temp));
        setIcon(response.data.weather[0].icon);
        setDesc(response.data.weather[0].description)
      })
      .catch((error) => {
        console.log(error);
      });

  }, [zipcode]);


  return (
    <div className="meteo">
      <div className="meteo-city">{city}</div>
      <div className="meteo-code">{zipcode}</div>
      <div className="meteo-temperature">
        {temp}
      </div>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={desc} />
    </div>
  );
}



export default Widget;