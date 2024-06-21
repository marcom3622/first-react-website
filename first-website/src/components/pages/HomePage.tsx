import React from "react";
import StickyMenu from "../StickyMenu";
import "./HomePage.css";

function Home() {
  return (
    <>
      <div className='home-sticky-menu-container'>
        <StickyMenu />
      </div>
    </>
  );
}

export default Home;
