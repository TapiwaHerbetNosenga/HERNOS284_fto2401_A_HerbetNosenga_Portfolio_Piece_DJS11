import React from "react";
import { Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { VscLibrary } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";



const Sidebar = () => {
  return (
    <aside id="mainNav">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <div className="linkTo">
                <RiHome2Line size={26} color="whitesmoke" />
                <h4 className=" head4 xl:text-3xl font-bold sm: ml-2 ">Home</h4>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/preview">
              <div className="linkTo">
              <VscLibrary size={26} color='whitesmoke'/>
                <h4 className=" head4 xl:text-3xl font-bold  sm: ml-2">Library</h4>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/favorite-episodes">
              <div className="linkTo">
              <FaRegHeart size={26} color='whitesmoke' />
                <h4 className="head4 xl:text-3xl font-bold  sm: ml-2">Favourites</h4>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
