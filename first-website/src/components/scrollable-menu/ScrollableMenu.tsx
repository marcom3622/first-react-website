import React from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import "./ScrollableMenu.css";

function ScrollableMenu() {
  return (
    <>
      <div className='flexbox-container'>
        <About />
        <Experience />
        <Projects />
      </div>
    </>
  );
}

export default ScrollableMenu;
