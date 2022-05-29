import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpoad from "../../components/ImageUpload/ImageUpoad";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Swal from "sweetalert2";
import "./AddCar.css";

const AddCar = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", name);
    data.append("price", price);
    data.append("image", image);
    data.append("status", status);
    data.append("category", category);

    try {
      const res = await axios.post(
        "https://rent-car-appx.herokuapp.com/admin/car",
        data,
        {
          headers: {
            "content--type": "multipart/formdata",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }

    navigate(
      "/listcar",
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      })
    );
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
              <section id="page-5">
                <div className="container pt-4">
                  <div className="row">
                    <div className="col-12">
                      <div className="sub-tree d-flex mt-3 mb-3">
                        <a>
                          <p className="fw-bold">Cars</p>
                        </a>
                        <i className="fa fa-solid fa-chevron-right mx-2"></i>
                        <a>
                          <p className="fw-bold">List Car</p>
                        </a>
                        <i className="fa fa-solid fa-chevron-right mx-2"></i>
                        <a>
                          <p>Add New Car</p>
                        </a>
                      </div>
                      <h2>Add New Car</h2>
                      {/* form */}
                      <div className="form-body mb-3">
                        <form onSubmit={(e) => handleSubmit(e)}>
                          <div className="row">
                            <div className="col-lg-3">
                              <label
                                htmlFor="inputName"
                                className="col-form-label"
                              >
                                Nama
                              </label>
                              <label htmlFor="wajib" style={{ color: "red" }}>
                                *
                              </label>
                            </div>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                name="name"
                                id="inputNama6"
                                className="form-control"
                                placeholder="Nama"
                                onChange={(e) => setName(e.target.value)}
                              />
                              <small
                                id="namaHelp"
                                className="form-text text-muted"
                              ></small>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-3">
                              <label
                                htmlFor="inputPassword6"
                                className="col-form-label"
                              >
                                Harga
                              </label>
                              <label htmlFor="wajib" sstyle={{ color: "red" }}>
                                *
                              </label>
                            </div>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                name="price"
                                id="inputHarga6"
                                className="form-control"
                                placeholder="Harga"
                                onChange={(e) => setPrice(e.target.value)}
                              />
                              <small
                                id="hargaHelp"
                                className="form-text text-muted"
                              ></small>
                            </div>
                          </div>

                          {/* img */}
                          <ImageUpoad
                            onChange={(e) => setImage(e.target.files[0])}
                          />

                          <div className="row">
                            <div className="col-lg-3">
                              <label
                                htmlFor="inputPassword6"
                                className="col-form-label"
                              >
                                Kategori
                              </label>
                              <label htmlFor="wajib" sstyle={{ color: "red" }}>
                                *
                              </label>
                            </div>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                name="category"
                                id="inputHarga6"
                                className="form-control"
                                placeholder="Kapasitas Mobil"
                                onChange={(e) => setCategory(e.target.value)}
                              />
                              <small
                                id="hargaHelp"
                                className="form-text text-muted"
                              ></small>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-3">
                              <label
                                htmlFor="inputFinishRent6"
                                className="col-form-label"
                              >
                                Status
                              </label>
                            </div>
                            <div className="col-lg-9">
                              <select
                                className="form-select form-control"
                                aria-label="Default select example"
                                name="status"
                              >
                                <option>---Pilih----</option>
                                <option
                                  value="true"
                                  onChange={(e) => setStatus(e.target.value)}
                                >
                                  Open Rental
                                </option>
                                <option
                                  value="false"
                                  onChange={(e) => setStatus(e.target.value)}
                                >
                                  Not Open Rental
                                </option>
                              </select>
                            </div>
                          </div>
                          <button type="reset" className="btn-custom">
                            Cancel
                          </button>
                          <button type="submit" className="btn-custom-save">
                            Save
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Akhir Content */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddCar;
