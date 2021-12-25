import React, { useEffect, useState } from 'react'
import geocoding, { GEOCODING_KEY } from '../../lib/geocoding';

const withFetchUserLocation = (WrappedComponent) => ({ ...props }) => {

  const [userLocation, setUserLocation] = useState({});
  // using geo-api to get the region and the country
  const fetchLocation = (pos) => {
    let lat = pos.coords.latitude;
    let lng = pos.coords.longitude;
    let latlng = lat + ', ' + lng;
    console.log(latlng);
    // let latlng = {
    //   lat: pos.coords.latitude,
    //   lng: pos.coords.longitude
    // }

    //seems that the request isn't coming through
    geocoding.get('/json?', {
      params:{
          latlng: latlng,
          key: GEOCODING_KEY
      }
    })
    .then(res =>{
      console.log(res);
      res.json() 
    })
    .then(res => {
      setUserLocation(res);
      console.log(res);
    })
    .catch((data, status) => {
      console.log('req failed', data, status);
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


  

  // //Ip address
  // const getLocationByIPAd = () => {
  //   fetch('https://extreme-ip-lookup.com/json/')
  //   .then(res => {
  //     console.log(Intl.DateTimeFormat().resolvedOptions().timeZoneName)
  //     res.json()
  //   })
  //   // .then(res => 
  //   //   // console.log("Country: ", res.country
  //   //   )
  //   .catch((data, status) => {
  //       console.log('req failed', data, status);
  //     })
  // }
  
  // getLocationByIPAd();