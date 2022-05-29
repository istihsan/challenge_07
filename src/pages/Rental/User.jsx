import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterUser from "../../components/FooterUser/FooterUser";
import FormSearchUser from "../../components/FormSearchUser/FormSearchUser";
import HeaderUser from "../../components/HeaderUser/HeaderUser";
import NavbarUser from "../../components/NavbarUser/NavbarUser";

function User() {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      window.location.href = "/register";
    }
  });

  if (!token) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/register", { replace: true });
  };
  return (
    <>
      <NavbarUser logout={() => handleLogout()} />
      <HeaderUser />
      <FormSearchUser />
      <FooterUser />
    </>
  );
}

export default User;
