import React from "react";
import "./Links.css";

function Links() {
  return (
    <>
      <div className='social-media-icons-container'>
        <a
          href='https://www.linkedin.com/in/marco-mehta/'
          target='_blank'
          className='fa fa-linkedin'
        ></a>
        <a
          href='https://github.com/marcom3622'
          target='_blank'
          className='fa fa-github'
        ></a>
        <a
          href='https://www.instagram.com/lil_wfx_marco/'
          target='_blank'
          className='fa fa-instagram'
        ></a>
      </div>
    </>
  );
}

export default Links;
