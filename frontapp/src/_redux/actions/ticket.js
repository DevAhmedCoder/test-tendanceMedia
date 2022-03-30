import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";
import { errorHandler } from "helpers/errorHandler";

const BASE_URL = "ticket/";

export const getAllTickets = createAsyncThunk(
  "ticket/getTickets",
  async (queryParams) => {
    try {
      const response = await api.get(`${BASE_URL}`, {
        params: queryParams,
      });
      return response.data;
    } catch (error) {
      errorHandler(error);
    }
  }
);
export const genData = async () => {
  try {
    await api.get("seed-db");
  } catch (error) {
    errorHandler(error);
  }
};
