import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import fi_plus from "../../assets/images/icon/fi_plus.png";
import fi_key from "../../assets/images/icon/fi_key.png";
import fi_clock from "../../assets/images/icon/fi_clock.png";

import "./ListCar.css";
import axios from "axios";

const ListCar = () => {
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCar();
  }, []);

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const getCar = async () => {
    try {
      const res = await axios.get(
        "https://rent-car-appx.herokuapp.com/admin/car"
      );
      setListData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
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
              <div className="container-fluid">
                <div className="list-button">
                  <span className="list-car">List Car</span>
                  <div className="button-right">
                    <Link to={"/add_car"} className="btn btn-add">
                      <img src={fi_plus} alt="icon-plus" /> Add New Car
                    </Link>
                  </div>
                </div>
                <div className="btn-group" aria-label="Basic example">
                  <button type="button" className="btn btn-outline-primary">
                    All
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    Small
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    Medium
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    Large
                  </button>
                </div>
                {/* card */}
                <div className="row">
                  {listData.map((item) => {
                    return (
                      <div className="col-md-4" key={item.id}>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">
                              <img
                                src={item.image}
                                alt="img-car"
                                style={{
                                  maxWidth: "300px",
                                  maxHeight: "190px",
                                }}
                              />
                            </h5>
                            <p>{item.name}</p>
                            <h6>Rp {item.price} / hari</h6>
                            <p className="card-text">
                              <img src={fi_key} alt="icon-key" />
                              Start rent - Finish rent
                            </p>
                            <p className="card-text">
                              <img src={fi_clock} alt="icon-clock" />
                              Updated at 4 Apr 2022, 09.00
                            </p>
                            <div
                              className="btn-group"
                              aria-label="Basic example"
                            >
                              <button
                                className="btn btn-detail"
                                onClick={() => handleDetail(item.id)}
                              >
                                Detail
                              </button>
                            </div>
                          </div>
                          {/* card */}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Akhir Content */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ListCar;
