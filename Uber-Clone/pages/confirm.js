import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";

const confirm = () => {
  const [pickUpCoordinates, setPickUpCoordinates] = useState();
  const [dropOffCoordinates, setDropOffCoordinates] = useState();
  const router = useRouter();
  const { pickUp, dropOff } = router.query;
  console.log(pickUp, dropOff);

  const getPickUoCoordinates = (pickUp) => {
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
        setPickUpCoordinates(data.features[0].center);
      });
  };

  const getDropOffCoordinates = (dropOff) => {
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
        setDropOffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickUoCoordinates(pickUp);
    getDropOffCoordinates(dropOff);
  }, [pickUp, dropOff]);

  return (
    <Wrapper>
      <Map
        pickUpCoordinates={pickUpCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
      <ConfirmRideContainer>
        <RideSelector />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </ConfirmRideContainer>
    </Wrapper>
  );
};

export default confirm;

const Wrapper = tw.div`
flex flex-col h-screen 
`;
const ConfirmRideContainer = tw.div`
    flex flex-1 flex-col h-1/2
`;

const ConfirmButtonContainer = tw.div`
  border-t-2
`;

const ConfirmButton = tw.div`
bg-black text-white mx-4 my-4 py-4 text-center
`;
