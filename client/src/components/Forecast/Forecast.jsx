import React, { useState } from 'react';
import classes from './Forecast.module.css';
import Conditions from '../Conditions/Conditions';


const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    


   function getForecast() {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Fresno", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "0b675797femshf77c9d6573289bcp1fb66cjsn6452f9b91ca6",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(response => {
        if (response.cod !== 200) {
            throw new Error()
        }
        setResponseObj(response);
    })
    .catch(err => {
        console.log(err);
    });
}

        return (
            
            <div>
                <h2 className={classes.txt}>Find Current Weather Conditions</h2>
                {/* <div className={classes.txt}>
                    {JSON.stringify(responseObj)}
                </div> */}
                <Conditions className={classes.txt}
               responseObj={responseObj}
               />
                <button className={classes.button} onClick={getForecast}>Get Forecast</button>
            </div>
     
        )
    }


export default Forecast;