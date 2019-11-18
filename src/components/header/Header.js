// import puce from '../puce.png';
import React from "react";
import "./header.css";

export default function Header({ arr }) {
  return (
    <div className="nav-bar">
      <img
        className="logo-docplanner"
        src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
        alt="..."
        width="70"
      />
      <ul className="menu-main">
        {arr.map((el, key) => (
          <li key={key}>
            <a href="/">{el.menu}</a>{" "}
            {el.submenu && (
              <ul className="sub-menu">
                {el.submenu.map((x, i) => (
                  <li key={i}>
                    <a href="/"> {x}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
