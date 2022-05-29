import React from "react";
import "./Invoice.css";
import NavbarRental from "../../components/NavbarRental/NavbarRental";
import PdfViewer from "../../components/PdfViewer/PdfViewer";
import arrowLeft from "../../assets/images/icon/fi_arrow-left.png";
import blueCheck from "../../assets/images/icon/Group 13.png";
import stripe from "../../assets/images/icon/Rectangle 36.png";
import success from "../../assets/images/icon/success.png";

const Invoice = () => {
  return (
    <>
      <NavbarRental />
      <div className="invoice-section">
        <div className="head">
          <div className="container">
            <div className="row row-head">
              <div className="col-md-5 mt-3 ms-3">
                <a href="#">
                  {" "}
                  <img src={arrowLeft} alt="" /> Tiket{" "}
                </a>
                <p>Order : 011235</p>
              </div>
              <div className="col-md-4 mt-3">
                <ul className="list-menu d-flex flex-row">
                  <li>
                    <img
                      src={blueCheck}
                      alt=""
                      style={{
                        width: "17px",
                        marginTop: "-3px",
                        marginRight: "5px",
                      }}
                    />{" "}
                    Pilih Metode
                  </li>
                  <li>
                    <img src={stripe} alt="" />
                  </li>
                  <li>
                    <img
                      src={blueCheck}
                      alt=""
                      style={{
                        width: "17px",
                        marginTop: "-3px",
                        marginRight: "5px",
                      }}
                    />{" "}
                    Bayar
                  </li>
                  <li>
                    <img src={stripe} alt="" />
                  </li>
                  <li>
                    <img
                      src={blueCheck}
                      alt=""
                      style={{
                        width: "17px",
                        marginTop: "-3px",
                        marginRight: "5px",
                      }}
                    />{" "}
                    Tiket
                  </li>
                </ul>
              </div>
            </div>
            <div className="row row-content text-center">
              <div className="col-md-7">
                <img src={success} alt="" />
                <p className="content-title mt-2">Pembayaran Berhasil</p>
                <p className="content-description">
                  Tunjukan invoice ini kepada petugas BCR di titik temu
                </p>
                <PdfViewer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
