import React, { useEffect, useState } from 'react'
import { geocoding } from '../../lib/geocoding';

const withFetchUserLocation = (WrappedComponent) => ({ ...props }) => {

  const [userLocation, setUserLocation] = useState(null);

  const fetchLocation = (pos) => {
    let lat = pos.coords.latitude;
    let lng = pos.coords.longitude;
    let latlng = lat + ', ' + lng;

    geocoding.get('', {
      params:{
          latlng: latlng,
          key: process.env.REACT_APP_GEOCODING_API_KEY
      }
    })
    .then(res =>{
      const address = res.data.results[0].address_components;
      setUserLocation({ 
        lat,
        lng, 
        subdivision : address[address.length - 3].short_name,
        country : address[address.length - 2].short_name, 
        address: res.data.results[0].address_components
      })
    })
    .catch((data, status) => {
      console.log('request failed :', data, status);
    })
  }

  useEffect(() => {
    const getUserLocation = () => {
      if(!navigator.geolocation) {
        console.log('geolocation service is not available on your browser');
        return;
      }
      navigator.geolocation.getCurrentPosition(fetchLocation)
    }
    getUserLocation();
  }, [])
  
  return (
    <WrappedComponent { ...props } userLocation={userLocation} />
  )
}

export default withFetchUserLocation