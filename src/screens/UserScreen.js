import React, { useState, useEffect } from "react";
import { Accordion, Card, Button } from 'react-bootstrap';
import axios from "axios";
import HospitalScreenOne from "./HospitalScreenOne";
import useGeolocation from "./useGeolocation";

const UserScreen = () => {
  const [data, setData] = useState([]);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const location = useGeolocation();
  const [getAllData, setGetAllData] = useState([]);

  const getData = async () => {
    setLat(location.coordinates.lat);
    setLon(location.coordinates.lon);
    let lat = location.coordinates.lat;
    let lon = location.coordinates.lon;
    setData(
      location.loaded
        ? JSON.stringify({ lat, lon })
        : "location data is not available."
    );
  };

  const getLocationsData = () => {
    var lat = location.coordinates.lat;
    var lon = location.coordinates.lon;

    function distance(lat1, lat2, lon1, lon2) {
      lon1 = (lon1 * Math.PI) / 180;
      lon2 = (lon2 * Math.PI) / 180;
      lat1 = (lat1 * Math.PI) / 180;
      lat2 = (lat2 * Math.PI) / 180;

      // Haversine formula
      let dlon = lon2 - lon1;
      let dlat = lat2 - lat1;
      let a =
        Math.pow(Math.sin(dlat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

      let c = 2 * Math.asin(Math.sqrt(a));

      let r = 3956;

      let value = c * r;

      return value;
    }

    const getAllLocationData = async () => {
      console.log("the data");
      axios
        .get("/api/getHospitalsNearby")
        .then(function (response) {
          var a = [];
          var n = response.data.doc.length;
          for (let i = 0; i < n; i++) {
            a[i] = response.data.doc[i].doc;
          }

          a = a.map((item) => {
            item["distance"] = distance(
              lat,
              item.latitude,
              lon,
              item.longitude
            );
            // console.log(item)
            return item;
          });

          a = a.filter((items) => {
            items.distance = items.distance.toFixed(2);
            return items.distance < 227;
          });

          console.log(a, "filtered");

          setGetAllData(a);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getAllLocationData();
  };

  return (
    <div>
      <Button variant="success" onClick={getLocationsData} size="md" block> Get All Location Data </Button>
      {getAllData?.map((value, index) => {
        return (
          <Card key={index}>
         <Card.Body>   {value.hospitalName} Hospital ---- {value.address} -- {value.distance} kms nearby. </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default UserScreen;
