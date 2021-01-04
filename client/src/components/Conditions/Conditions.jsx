import React from 'react';
import classes from '../Forecast/Forecast.module.css';



const conditions = (props) => {
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div >
                   <p className={classes.txt}><strong>{props.responseObj.name}</strong></p>
                   <p className={classes.txt}>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
               </div>
           : null
           }
       </div>
   )
}

export default conditions;