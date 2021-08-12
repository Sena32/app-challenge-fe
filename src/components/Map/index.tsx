import React from 'react';
// import './App.css';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
const AnyReactComponent = ({ text, lat, lng }) => <div>{text}</div>;
const key = {key:process.env.API_KEY_GOOGLE_MAP} || 'AIzaSyAO2prDBMuQLK97HIqojo2NlaAQ-s2zBBk'
interface Local {
    lat?: string,
    lng?: string,
}
export default function Map({lat, lng}:Local){
    const defaultProps = {
      center: {
        lat: -7.1892632,
        lng: -34.8755007
      },
      zoom: 15
    };
  
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        //   bootstrapURLKeys={key}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Marker
            lat={lat || 7.1377579}
            lng={lng || 34.8480882}
            text="My Marker"
            onClick={console.log("olá")}
          />
        </GoogleMapReact>
      </div>
    );
  }
 
