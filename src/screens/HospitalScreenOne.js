import React,{ useState, useEffect } from 'react';

const HospitalScreenOne = ({lat1, lat2, lon1, lon2}) => {

    const [dis, setDis] = useState(null)
   

 function  distance(lat1, lat2, lon1, lon2) {

        lon1 = lon1 * Math.PI / 180;
        lon2 = lon2 * Math.PI / 180;
        lat1 = lat1 * Math.PI / 180;
        lat2 = lat2 * Math.PI / 180;

// Haversine formula
        let dlon = lon2 - lon1;
        let dlat = lat2 - lat1;
            let a = Math.pow(Math.sin(dlat / 2), 2)
                + Math.cos(lat1) * Math.cos(lat2)
                * Math.pow(Math.sin(dlon / 2),2);
  
        let c = 2 * Math.asin(Math.sqrt(a));

    // 3956 is used for distance in KM's.
    // 6371 is used for distance i
        let r = 3956;
        
        setDis(c*r)

// calculate the result
        // return(c * r);
}

        useEffect(() => {
                distance(lat1, lat2, lon1, lon2)
        },[])

return(
    <div>
    {dis}
    </div>
)

}

export default HospitalScreenOne