import React from "react";
import "./index.css";
import { BiCommentAdd } from "react-icons/bi";
import { IoWarningOutline } from "react-icons/io5";
import { HiOutlineSupport, HiOutlineMail } from "react-icons/hi";
import { RiNotification2Line } from "react-icons/ri";
import image from "img/unknown-user-image.jpg";
const Navbar = () => {
  return (
    <div className="navbarContainer d-flex align-items-center bg-white">
      <div className="col-8 d-flex align-items-center justify-content-between  px-3">
        <div className="d-flex">
          {[<BiCommentAdd />, <HiOutlineSupport />, <IoWarningOutline />].map(
            (icon, i) => (
              <div
                key={i}
                className=" bg-purpleGraden text-white d-flex align-items-center border justify-content-center fs-5 rounded-circle me-1"
                style={{ width: "40px", height: "40px" }}
              >
                {icon}
              </div>
            )
          )}
        </div>
        <div className="d-flex text-purple-project fs-6 text-purple-project">
          <RiNotification2Line />
          <div
            className="rounded-circle bg-danger me-3"
            style={{
              width: "3px",
              height: "3px",
              boxShadow: "0px 0px 10px 1px red",
            }}
          />
          <HiOutlineMail />
          <div
            className="rounded-circle bg-purpleGraden "
            style={{
              width: "3px",
              height: "3px",
              boxShadow: "0px 0px 10px 1px #8279f2",
            }}
          />
        </div>
      </div>
      <div
        className="bg-purpleGraden col-4 d-flex align-items-center h-100 text-white px-4"
        style={{
          borderRadius: " 0px 11px 11px 0px",
        }}
      >
        <div className="me-3">
          <img
            src={image}
            alt="profile-pic"
            className="profile-round-circle align-self-center"
          />
        </div>
        <div className=" flex-colunm">
          <div style={{ fontSize: "16px" }}>Damien Lallement</div>
          <div style={{ fontSize: "12px" }}>EPITECH</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
