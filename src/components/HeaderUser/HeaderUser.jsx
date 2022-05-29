import React from "react";
import Mobil from "../../assets/images/img_carmobil.png";
import "./HeaderUser.css";

function HeaderUser() {
  return (
    <>
      <section className="hero" id="hero" style={{marginTop: "4%",}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 align-self-center mt-5">
              <h2 className="pb-3">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h2>
              <p className="pb-3">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas <br /> terbaik dengan harga terjangkau. Selalu siap
                melayani kebutuhanmu <br /> untuk sewa mobil selama 24 jam.
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="hero-img">
                <img className="img-fluid" src={Mobil} alt="hero images" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeaderUser;
