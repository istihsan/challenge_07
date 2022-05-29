import React, { useEffect, useState } from "react";
import "./Register.css";
import Car from "../../assets/images/img-mobil.png";
import GoogleLogin from "react-google-login";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo-bcr.png";
import axios from "axios";
import "gapi-script";

export default function Register() {
  const [dataRegister, setDataRegister] = useState({
    email: "",
    password: "",
    role: "Customer",
  });

  const navigate = useNavigate();

  const responseGoogle = (response) => {
    console.log(response);
    localStorage.setItem("access_token", response.tokenObj.id_token);
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/");
    }
  });

  const handleSubmit = async () => {
    try {
      const res = await axios({
        method: "post",
        url: "https://rent-car-appx.herokuapp.com/admin/auth/register",
        data: dataRegister,
      });
      console.log(res.data);

      if (res.status === 201) {
        alert("Register berhasil, Silahkan Sign In untuk melanjutkan!");
        setDataRegister({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      if (error.code === "ERR_BAD_RESPONSE") {
        alert("data yang anda masukan salah");
      }

      if (error.code === "ERR_BAD_REQUEST") {
        alert("Email already exists");
        setDataRegister({
          email: "",
          password: "",
        });
      }
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
                <h1>Create New Account</h1>
              </div>

              <div className="form-content">
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Contoh: johndee@gmail.com"
                    value={dataRegister.email}
                    onChange={(e) =>
                      setDataRegister({
                        ...dataRegister,
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
                    value={dataRegister.password}
                    onChange={(e) =>
                      setDataRegister({
                        ...dataRegister,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <button
                  onClick={() => handleSubmit()}
                  className="btn btn-primary"
                >
                  Sign Up
                </button>

                <span className="link">
                  Already have account ?
                  <Link className="login-link" to={"/login"}>
                    Sign In.
                  </Link>
                </span>
                <p className="text-center mt-4">OR</p>
                <GoogleLogin
                  clientId="244205007996-2qn8pqps20lliai7gi5ephc45fpovqmn.apps.googleusercontent.com"
                  buttonText="Sign In With Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                ></GoogleLogin>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
