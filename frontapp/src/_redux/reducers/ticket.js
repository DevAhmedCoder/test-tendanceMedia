import { createSlice } from "@reduxjs/toolkit";
import { getAllTickets } from "_redux/actions/ticket";

const initialState = {
  ticketList: [],
  currentTicket: undefined,
  loading: false,
};

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTickets.fulfilled, (state, { payload }) => {
      state.ticketList = payload;
      state.loading = false;
    });
  },
});

export default ticketsSlice.reducer;
