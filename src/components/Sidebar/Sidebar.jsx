import React from "react";
import Rectangle from "../../assets/images/icon/Rectangle 63.png";
import Home from "../../assets/images/icon/Home_Icon.svg";
import Truck from "../../assets/images/icon/Truck_Icon.svg";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <section className="sidebar-section">
        <div className="main-menu">
          <Link to={"/dashboard"}>
            <div className="box text-center d-flex justify-content-center align-items-center">
              <img className="side-icon" src={Rectangle} alt="logo" />
            </div>
          </Link>
          <Link to={"/dashboard"}>
            <div className="box text-center py-2">
              <img className="side-icon" src={Home} alt="dashboard" />
              <div>Dashboard</div>
            </div>
          </Link>
          <Link to={"/listcar"}>
            <div className="box text-center py-2">
              <img className="side-icon" src={Truck} alt="Car" />
              <div>Cars</div>
            </div>
          </Link>
        </div>

        <div className="collapseSidebar">
          <div className="menu-list pt-3">
            <h4 className="text-secondary px-3 py-2">CARS</h4>
            <Link to={"/dashbaord"}>
              <div className="list-menu">
                <p className="m-0">Dashboard</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
