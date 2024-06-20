import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import Description from "./Description";
import HomeButton from "./HomeButton";

function Home() {
  return (
    <>
      <WelcomeMessage />
      <Description />
      <HomeButton />
    </>
  );
}

export default Home;
