import React,{useState, useEffect} from 'react'

import axios from 'axios'
import HospitalScreenOne from './HospitalScreenOne'
import useGeolocation from './useGeolocation'

const UserScreen = () => {

    const [ data, setData ] = useState([])
    const [ lat, setLat] = useState('');
    const [ lon, setLon ] = useState('')
    const location = useGeolocation();
    const [ getAllData, setGetAllData ] = useState(null)

    const getData = async () => {
        setLat(location.coordinates.lat)
        setLon(location.coordinates.lon)
        let lat = location.coordinates.lat
        let lon = location.coordinates.lon
       setData(location.loaded ? JSON.stringify({lat, lon}) : "location data is not available.")
    }

    const getAllLocationData = async () => {
        console.log("the data")
        axios.get('/api/getHospitalsNearby')
        .then(function (response) {
            setGetAllData(JSON.stringify(response))
            // setGetAllData(response.data.doc[3].doc.phone)
            console.log(response.data.doc[5].doc, "sample data")
          })
          .catch(function (error) {
            console.log(error);
          });
        }
            
        useEffect(() => {
                getAllLocationData()
        },[])



    return(
        <div>
            <button onClick={getData}>Get your location</button>
            
           Your Latitude and Longitude are {data}
            <br/>
         Your Latitude is {lat}
            <br/>
         Your longitude is {lon}
         {/* <HospitalScreenOne  lat1={lat} lon1={lon}/> */}
            
        {/* <button onClick={getAllLocationData}> get all database</button> */}
        
            {/* {getAllData?.map((value,index) => {
                return (
                <div key={index}> 
                        {value.phone}
                </div>

                )
            })} */}
            

             {getAllData}
        </div>
    )
}

export default UserScreen