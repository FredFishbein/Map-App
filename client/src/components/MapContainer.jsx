import React, { useState  } from 'react'
import { GoogleMap, LoadScript, Marker,InfoWindow } from '@react-google-maps/api';
import Locations from './Locations';
// import { FontAwesome } from "react-icons/fa";
import {FaDog, FaBath, FaAccessibleIcon, FaBed } from "react-icons/fa"
import {IconContext} from "react-icons"




function MapContainer(props) {

  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
  }
  
  const mapStyles = {
    margin: "30px 0 20px 20px",
    height: "60vh",
    width: "96%",
    borderRadius:"15px",
    
    };
  
  const defaultCenter = {
    lat: 34.5405, lng: -119.2945
    }
  

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyB_TovWeVLkzqVNkStjkgYzKHxGY2a5vz8'
     >
      <GoogleMap
      mapContainerStyle={mapStyles}
          zoom={8}
          center={defaultCenter}
          >
         {
            Locations.map(item => {
              return (
              <Marker 
              key={item.name} 
              position={item.location}
              img={item.img}
              onClick={() => onSelect(item)}
              />
              )
            })
         }
         {
            selected.location &&
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <div className="infoWindowPopUp">
              <img src={selected.img} className="small-image" alt="Img"/>
              <p>{selected.name}</p>
              <p>{selected.description}</p>
              <IconContext.Provider value={{ style: {fontSize: '26px', color: "#222831"}}}>
              <FaDog  className="fonts"/> 
              <FaBath className="fonts"/>  
              <FaBed  className="fonts"/>  
              <FaAccessibleIcon className="fonts"/>  
              </IconContext.Provider>  
              </div>
            </InfoWindow>
            )
         }
        </GoogleMap>
    </LoadScript>
  )
}

export default MapContainer;
