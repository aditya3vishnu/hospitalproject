import React,{ useState,useEffect } from 'react';

const useGeolocation = () => {

        const [ location,setLocation ] = useState({
             loaded: false,
             coords: { lat: "", lon: "" }
            });

            const onSuccess = (location) => {
                setLocation({
                    loaded: true,
                    coordinates: {
                        lat: location.coords.latitude,
                        lon: location.coords.longitude
                    }
                })
            }

            const onError = (error) => {
                setLocation({
                    loaded: true,
                    error,
                })
            }
   
            useEffect(() => {

                if( ! ("geolocation" in navigator) ) {
                    onError({
                        code:0,
                        message: "Geolocation is not supported in browser"
                    });
                   
                }
                    navigator.geolocation.getCurrentPosition(onSuccess, onError);
            },[])


    return location
} 

export default useGeolocation;