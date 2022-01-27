import { useEffect } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

const confirm = () => {
  const getPickUoCoordinates = () => {
    const pickUp = "Santa Monica";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYW5vbmRvIiwiYSI6ImNreXZrZWpuMjAxNWszMXBxcXJvNzNhMHEifQ.1lUh7mHwLCwbPo_9sMKSWg",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.features[0].center);
      });
  };

  const getDropOffCoordinates = () => {
    const dropOff = "Los Angeles";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYW5vbmRvIiwiYSI6ImNreXZrZWpuMjAxNWszMXBxcXJvNzNhMHEifQ.1lUh7mHwLCwbPo_9sMKSWg",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickUoCoordinates();
    getDropOffCoordinates();
  }, []);

  return (
    <Wrapper>
      <Map />
      <ConfirmRideContainer></ConfirmRideContainer>
    </Wrapper>
  );
};

export default confirm;

const Wrapper = tw.div`
flex flex-col h-screen 
`;
const ConfirmRideContainer = tw.div`
    flex-1
`;
