import React from "react";
import StickyMenu from "../sticky-menu/StickyMenu";
import "./HomePage.css";
import ScrollableMenu from "../scrollable-menu/ScrollableMenu";

function Home() {
  return (
    <>
      <div className='container'>
        <div className='home-sticky-menu-container'>
          <StickyMenu />
        </div>
        <div className='home-scrollable-menu-container'>
          <ScrollableMenu />
        </div>
      </div>
    </>
  );
}

export default Home;
