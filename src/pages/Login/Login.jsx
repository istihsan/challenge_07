import React, { useEffect, useState } from "react";
import "./Login.css";
import Car from "../../assets/images/img-mobil.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/images/logo-bcr.png";

export default function Login() {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/");
    }
  });

  const handleSubmit = async () => {
    try {
      const res = await axios({
        method: "post",
        url: "https://rent-car-appx.herokuapp.com/admin/auth/login",
        data: dataLogin,
      });
      // console.log(res.data);

      if (res.status === 201 && res.data.role === "admin") {
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/dashboard", { replace: true });
      }

      if (res.status === 201 && res.data.role === "Customer") {
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/", { replace: true });
      }
    } catch (error) {
      alert("data yang anda masukan salah!");
      console.log(error);
      setDataLogin({
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row login">
            <div className="col-8 left-side">
              <img
                src={Car}
                className="w-100 vh-100"
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="col-4">
              <div className="form-head">
                <img src={Logo} alt="" />
                <h1>Welcome to sign in page</h1>
              </div>

              <div className="form-content">
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Ex: johndee@gmail.com"
                    value={dataLogin.email}
                    onChange={(e) =>
                      setDataLogin({
                        ...dataLogin,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="6+ karakter"
                    value={dataLogin.password}
                    onChange={(e) =>
                      setDataLogin({
                        ...dataLogin,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleSubmit()}
                >
                  Sign In
                </button>
                <button className="btn btn-back" onClick={() => navigate("/")}>
                  Back To Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
