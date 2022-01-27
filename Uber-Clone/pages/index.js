import Link from "next/link";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" />
          <Profile>
            <Name>Stephen Hookings</Name>
            <UserImage src="https://i.ibb.co/svfxF4z/undraw-male-avatar-323b.png" />
          </Profile>
        </Header>
        <ActionsButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Reserve
          </ActionButton>
        </ActionsButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  flex-1 p-4
`;
const Header = tw.div`
  flex justify-between items-center
`;

const UberLogo = tw.img`
  h-28
`;
const Profile = tw.div`
flex justify-between items-center
`;
const Name = tw.div`
  mr-4  w-20
`;
const UserImage = tw.img`
h-16 w-16 rounded-full border-gray-200 p-px
`;
const ActionsButtons = tw.div`
  flex 
`;

const ActionButton = tw.div`
  flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition cursor-pointer text-xl
`;
const ActionButtonImage = tw.img`
h-3/5
`;
const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 cursor-pointer
`;
