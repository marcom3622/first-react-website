import React from "react";
import Name from "./Name";
import Menu from "./Menu";
import Links from "./Links";

function StickyMenu() {
  return (
    <>
      <div className='sticky-menu-container'>
        <Name />
        <Menu />
        <Links />
      </div>
    </>
  );
}

export default StickyMenu;
