import React from "react";
import "./FormSearchUser.css";

function FormSearchUser() {
  return (
    <>
      <section className="form-search">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10">
              <div className="box">
                <form>
                  <div className="row row-input">
                    <div className="col-auto">
                      <span>Tipe Driver</span>
                      <div className="input-group">
                        <select className="form-select" id="inputGroupSelect01">
                          <option>Pilih Tipe Driver</option>
                          <option>Dengan Supir</option>
                          <option>Tanpa Supir (Lepas Kunci)</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-auto">
                      <span>Tanggal</span>
                      <div className="input-group">
                        <input type="date" className="form-control" />
                      </div>
                    </div>
                    <div className="col-auto">
                      <span>Waktu Jemput/Ambil</span>
                      <div className="input-group">
                        <select className="form-select" id="inputGroupSelect01">
                          <option>Pilih Waktu</option>
                          <option>08.00 WIB</option>
                          <option>09.00 WIB</option>
                          <option>10.00 WIB</option>
                          <option>11.00 WIB</option>
                          <option>12.00 WIB</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-auto">
                      <span>Jumlah Penumpang (optional)</span>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Jumlah Penumpang"
                        />
                      </div>
                    </div>
                    <div className="col-auto align-self-end">
                      <button className="btn btn-cari" type="submit">
                        Cari Mobil
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FormSearchUser;
