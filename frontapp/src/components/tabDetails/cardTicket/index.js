import React from "react";
import "./index.css";
import { FiStar } from "react-icons/fi";
import { BsBoxArrowInDown } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import moment from "moment";

const CardTicket = ({ createdAt, title, typeDoc }) => {
  return (
    <div
      className="card border-0 rounded collapsible mb-5 me-3"
      style={{
        width: "187px",
        height: "181px",
        backgroundColor: "#F4F7F8",
      }}
    >
      <div
        style={{ height: "137px", fontSize: "16px" }}
        className="text-purple-project d-flex justify-content-between p-2"
      >
        <div>
          <FiStar />
        </div>
        <div>
          <BsBoxArrowInDown className="me-2" />
          <AiOutlineEye />
        </div>
      </div>
      <div
        className="card-body bg-white  rounded m-1 text-center"
        style={{ fontSize: "12px" }}
      >
        <div className="card-text fw-bold">document{typeDoc}</div>
        <p className="content">{title}</p>
        <p className="content">{`${moment(createdAt).format("L")} à ${moment(
          createdAt
        ).format("LT")}`}</p>
      </div>
    </div>
  );
};

export default CardTicket;
