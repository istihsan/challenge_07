import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import FI from "../../assets/images/icon/fi.png";
import Sort from "../../assets/images/icon/fi_sort.png";
import "./Home.css";
import Chart from "../../components/Chart/Chart";

export default function Home() {
  return (
    <>
      <div className="container-fluid p-0">
        <Navbar />

        <Sidebar />

        <section className="content-section ps-5 pe-4">
          <div className="row">
            <div className="col-lg-0" id="show-col-lg-0">
              <div className="adding-space" style={{ width: "300px" }}></div>
            </div>
            <div className="col-lg-12" id="show-col-lg-12">
              {/* Content */}

              <div className="container mt-5">
                <h2>Dashboard</h2>
                <h3>
                  <img src={FI} alt="" /> List Order
                </h3>
                <table id="datatable" className="table">
                  <thead>
                    <tr>
                      <th className="text-center">No</th>
                      <th>
                        User Email <img src={Sort} alt="" />
                      </th>
                      <th>
                        Car <img src={Sort} alt="" />
                      </th>
                      <th>
                        Start Rent <img src={Sort} alt="" />
                      </th>
                      <th>
                        Finish Rent <img src={Sort} alt="" />
                      </th>
                      <th>
                        Price <img src={Sort} alt="" />
                      </th>
                      <th>
                        Satus <img src={Sort} alt="" />
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ background: "white" }}>
                    <tr>
                      <td className="text-center">1</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">4</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">5</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">6</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">7</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">8</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">9</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">10</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <Chart></Chart>
      </div>
    </>
  );
}
