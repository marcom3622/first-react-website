import React from "react";
import "./Menu.css";

function Menu() {
  const menuItems = ["ABOUT", "EXPERIENCE", "PROJECTS"];
  return (
    <>
      <ul className='list-unstyled'>
        {menuItems.map((item) => (
          <li>
            <i className='bi bi-arrow-right'></i>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Menu;
