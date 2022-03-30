import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import TabDetails from "components/tabDetails";
import React from "react";

const Home = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <Navbar />
      <TabDetails />
    </div>
  );
};

export default Home;
