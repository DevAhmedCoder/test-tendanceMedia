import { useEffect, useState } from "react";
import { genData, getAllTickets } from "_redux/actions/ticket";
import { useDispatch, useSelector } from "react-redux";
import { formatSelectOptions } from "helpers/formatSelectOptions";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const useTabDetails = () => {
  const [title, setTitle] = useState();
  const [typeDoc, setTypeDoc] = useState();
  const [createdAt, setCreatedAt] = useState();
  const [disabledButton, setDisabledButton] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getAllTickets({
        title,
        typeDoc,
        createdAt: createdAt && moment(createdAt).format("YYYY-MM-DD"),
      })
    );
  }, [createdAt, dispatch, title, typeDoc, disabledButton]);

  const { ticketList } = useSelector((state) => state.tickets);

  const listOpionTitle = formatSelectOptions(ticketList?.map((e) => e.title));
  const listOpionType = formatSelectOptions(ticketList?.map((e) => e.typeDoc));
  const handleGenData = () => {
    console.log(disabledButton);
    setDisabledButton(true);
    dispatch(genData());
  };
  return {
    title,
    setTitle,
    typeDoc,
    setTypeDoc,
    createdAt,
    setCreatedAt,
    listOpionTitle,
    listOpionType,
    ticketList,
    handleGenData,
    disabledButton,
  };
};

export default useTabDetails;
