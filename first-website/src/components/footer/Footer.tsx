import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className='footer-container'>
        <p className='footer-text'>
          This website is made using React.js with Typescript
        </p>
        <div className='footer-logo'>
          <img src='/assets/react-2.svg' width={30} />
        </div>
      </div>
    </>
  );
}

export default Footer;
