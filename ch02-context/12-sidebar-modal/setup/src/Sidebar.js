import React, { useContext } from "react";
import logo from "./logo.svg";

import { AppContext } from "./context";

import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";

const Sidebar = () => {
  const appCtx = useContext(AppContext);
  const { isSidebarOpen, closeSidebarHandler } = appCtx;

  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-container">
        <img src={logo} className="logo"></img>
        <button className="close-btn" onClick={closeSidebarHandler}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((s) => {
          const { id, url, icon } = s;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
