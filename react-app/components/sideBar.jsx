import React from "react";
import { Link } from "react-router-dom";
import homeLogo from "/home.svg";
import libraryLogo from "/library.svg";
import heartLogo from "/heart.svg"

const Sidebar = () => {
  return (
    <aside id="mainNav">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <div className="linkTo">
                <img src={homeLogo} className="logo" alt="Home icon" />
                <h4 className="head4">Home</h4>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/preview">
              <div className="linkTo">
                <img src={libraryLogo} className="logo" alt="Library icon" />
                <h4 className="head4">Library</h4>
              </div>
            </Link>
          </li>
          <li>
          <Link to="/favorite-episodes">
              <div className="linkTo">
              <img src={heartLogo} className="logo" alt="Heart icon" />
                <h4 className="head4">Favourites</h4>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
