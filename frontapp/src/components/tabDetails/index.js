import React from "react";
import "./index.css";
import TabHeader from "./tabHeader";
import Filter from "./filter";
import CardTicket from "./cardTicket";
import useTabDetails from "./useTabDetails";
import moment from "moment";

const TabDetails = () => {
  const { ticketList } = useTabDetails();
  console.log({ ticketList });
  return (
    <div className="tabDetailsContainer ">
      <TabHeader />
      <Filter />
      <div className="bg-white p-5 rounded-bottom d-flex flex-wrap ">
        {ticketList.map(({ createdAt, title, typeDoc }, i) => {
          return (
            <CardTicket
              createdAt={createdAt}
              title={title}
              typeDoc={typeDoc}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TabDetails;
