import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "./styles/anavbar.css";
import Logo from "../assets/fcritl.png";
import NavLink from "./anavlink";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setOpenLinks((prev) => !prev);
  };

  return (
    <div className="navbar">
      <div className={`leftSide ${openLinks ? "open" : "close"}`}>
        <div className="logoWithText">
          <a
            href="https://www.fcrit.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Logo} alt="FCRIT Logo" />
          </a>
        </div>

        <div className="hiddenLinks">
          <Link to="/ahome">Home</Link>
          <Link to="/vacl">Vacation Leave</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="rightSide">
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>

        <div className="navbar-links">
          <NavLink
            to="/ahome"
            label="Home"
            currentPath={location.pathname}
          />
          <NavLink
            to="/vacl"
            label="Vacation Leave"
            currentPath={location.pathname}
          />
        </div>

        <Link to="/alogin">
          <button className="logout-button">Log Out</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;