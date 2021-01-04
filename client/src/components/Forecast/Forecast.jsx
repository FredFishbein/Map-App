import React, { useState } from 'react';
import classes from './Forecast.module.css';
import Conditions from '../Conditions/Conditions';


const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    


   function getForecast() {
    fetch("URL", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "API",
            "x-rapidapi-host": "URL"
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
