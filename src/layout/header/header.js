import "./_header.scss";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { PiFlowerLotusLight } from "react-icons/pi";
import { useState } from "react";

export const Nav = () => {
  const [active, setActive] = useState(true);
  const search = () => {
    setActive(!active);
  };

  return (
    <div className="navbar  m-0 row ">
      <div className="col-4 items">
        <a href="#">
          <h4>Home</h4>
        </a>
        <a href="#">
          <div class="dropdown">
            <h4 className="" data-bs-toggle="dropdown" aria-expanded="false">Boutique</h4>
            <ul className="dropdown-menu mt-3">
              <li><button className="dropdown-item" type="button">Accessoires</button></li>
              <li><button className="dropdown-item" type="button">Huil Esentielles</button></li>
              <li><button className="dropdown-item" type="button">Nos savons</button></li>
              <li><button className="dropdown-item" type="button">Solution Naturelles</button></li>
            </ul>
          </div>
        </a>
        <a href="#">
          <h4>Coffert Cadeau</h4>
        </a>
      </div>
      <div className="image col-4">
        <PiFlowerLotusLight className="logo" />
        <h3> lotus</h3>
      </div>
      <div className="col-4 icons ">
        <div className="searchDiv">
          <input
            type="text"
            className={!active ? "search" : "d-none"}
            placeholder="Search"
          />
        </div>
        <div className="iconItem">
          <a href="#">
            <BiSearchAlt onClick={search} />
          </a>
          <a href="#">
            <RiAccountPinCircleLine />
          </a>
          <a href="#">
            <FiShoppingCart />
          </a>
        </div>
      </div>
    </div>
  );
};