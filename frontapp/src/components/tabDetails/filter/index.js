import React from "react";
import { RiEqualizerLine } from "react-icons/ri";
import ReactSelect from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCloudUpload } from "react-icons/ai";
import useTabDetails from "../useTabDetails";
import moment from "moment";

const Filter = () => {
  const {
    createdAt,
    listOpionTitle,
    listOpionType,
    setCreatedAt,
    setTitle,
    setTypeDoc,
    title,
    typeDoc,
    handleGenData,
    disabledButton,
  } = useTabDetails();

  return (
    <div className="bg-white d-flex px-4 align-items-center justify-content-between py-3">
      <div className="d-flex">
        <div className="text-purple-project d-flex align-items-center me-2 ">
          <RiEqualizerLine style={{ fontSize: "14px", marginRight: "5px" }} />
          <div style={{ fontSize: "12px" }}>FILTER</div>
        </div>
        <div style={{ width: "199px" }}>
          <ReactSelect
            name="title"
            valueKey="value"
            placeholder="Tous les tickets"
            options={listOpionTitle}
            isSearchable
            value={title}
            onChange={(data) => setTitle(data.value)}
          />
        </div>
        <div style={{ width: "199px" }}>
          <ReactSelect
            name="typeDoc"
            valueKey="value"
            placeholder="Type"
            className="selectFilter"
            styles={{ backgroundColor: "transparent" }}
            options={listOpionType}
            isClearable={false}
            isSearchable={false}
            value={typeDoc}
            onChange={(data) => setTypeDoc(data.value)}
          />
        </div>
        <div>
          <DatePicker
            selected={createdAt}
            onChange={setCreatedAt}
            placeholderText={moment(new Date()).format("YYYY-MM-DD")}
          />
        </div>
      </div>
      <button
        type="button"
        onClick={handleGenData}
        className="border-0 bg-transparent"
        disabled={disabledButton}
      >
        <div className=" border bg-purpleGraden d-flex align-items-center text-white px-3 py-2 rounded-pill">
          <AiOutlineCloudUpload className="me-2 fs-4" /> Importer un fichier
        </div>
      </button>
    </div>
  );
};

export default Filter;
