import React from "react";
import "./index.css";
import { AiOutlineTag } from "react-icons/ai";
import { RiHome4Line, RiFileTextLine, RiCloudLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="SidebarContainer bg-white">
      <div className="  text-center py-5">LOGO</div>
      <div className=" text-center py-3  me-3 fs-4 text-gray-project ">
        <RiHome4Line />
      </div>
      <div className="text-center py-3  me-3 fs-4 text-gray-project ">
        <AiOutlineTag />
      </div>
      <div className="text-center py-3  me-3 fs-4 text-gray-project ">
        <RiFileTextLine />
      </div>
      <div
        className="text-center py-3 me-3 activeButton bg-purpleGraden text-white fs-4 "
        style={{ borderRadius: "0px 15px 15px 0px" }}
      >
        <RiCloudLine />
      </div>
    </div>
  );
};

export default Sidebar;
