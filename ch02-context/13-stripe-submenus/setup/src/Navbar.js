import React, { useContext } from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";

import AppContext from "./context";

const Navbar = () => {
  const appCtx = useContext(AppContext);
  const { openSidebarHandler, openSubmenuHandler, closeSubmenuHandler } =
    appCtx;

  const displaySubmenu = (event) => {
    const page = event.target.textContent;
    const tempBtn = event.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenuHandler(page, { center, bottom });
  };

  const submenuHandler = (event) => {
    if (!event.target.classList.contains("link-btn")) {
      closeSubmenuHandler();
    }
  };

  return (
    <nav className="nav" onMouseOver={submenuHandler}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="" />
          <button className="btn toggle-btn" onClick={openSidebarHandler}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
