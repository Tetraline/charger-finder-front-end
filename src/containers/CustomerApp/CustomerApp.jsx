import NavBar from "../NavBar/NavBar";
import Map from "../Map/Map";
import ResultList from "../ResultList/ResultList";
import { useState, useEffect } from "react";

const CustomerApp = () => {
  const defaultLocation = {
    lat: "none",
    lng: "none",
  };
  const [userLocation, setUserLocation] = useState(defaultLocation);
  const [results, setResults] = useState([]);

  const getResultsAndDisplay = async (userLocation) => {
    const p = {};
    p.lat = Number(userLocation.lat);
    p.lng = Number(userLocation.lng);
    const params = Object.entries(p)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    try {
      const url = "http://localhost:8080/location/?" + params;
      const res = await fetch(url);
      const data = await res.json();
      setResults(data);
    } catch (err) {
      const data = [{ name: "connection error" }];
      setResults(data);
    }
  };

  useEffect(() => {
    getResultsAndDisplay(userLocation);
  }, [userLocation]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossOrigin=""
      />
      <NavBar />
      <Map setUserLocation={setUserLocation} />
      <ResultList results={results} />
    </>
  );
};

export default CustomerApp;
