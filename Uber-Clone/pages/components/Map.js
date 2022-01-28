import mapboxgl from "!mapbox-gl";
import React, { useEffect } from "react";
import tw from "tailwind-styled-components";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5vbmRvIiwiYSI6ImNreXZrZWpuMjAxNWszMXBxcXJvNzNhMHEifQ.1lUh7mHwLCwbPo_9sMKSWg";

const Map = ({ pickUpCoordinates, dropOffCoordinates }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
    if (pickUpCoordinates) {
      addToMap(map, pickUpCoordinates);
    }
    if (dropOffCoordinates) {
      addToMap(map, dropOffCoordinates);
    }
    if (pickUpCoordinates && dropOffCoordinates) {
      map.fitBounds([pickUpCoordinates, dropOffCoordinates], { padding: 60 });
    }
  }, [pickUpCoordinates, dropOffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
    flex-1 h-1/2
`;
