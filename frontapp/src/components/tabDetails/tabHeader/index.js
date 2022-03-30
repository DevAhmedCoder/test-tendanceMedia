import React from "react";
import { BiCommentAdd, BiLockOpen } from "react-icons/bi";
import { IoShareSocialOutline } from "react-icons/io5";
const TabHeader = () => (
  <div className="d-flex text-center fs-6">
    <div
      className="col-4 text-purple-project py-3 bg-white rounded-top"
      style={{ borderTop: "1px solid #8379F2" }}
    >
      <BiCommentAdd /> Tickets partagés
    </div>
    <div className="w-100 text-dark-gray-project py-3 bg-lightGray   rounded-top mx-1">
      <IoShareSocialOutline />
      Documents partagés
    </div>
    <div className="col-4 text-dark-gray-project py-3 bg-lightGray  rounded-top">
      <BiLockOpen /> Documents confidentiels
    </div>
  </div>
);

export default TabHeader;
