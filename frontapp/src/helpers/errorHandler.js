import { toast } from 'react-toastify';

export const isAxiosError = (error)=> error.isAxiosError === true;
export const errorHandler = (error) =>
  toast(isAxiosError(error) ? error.response?.data.message : error.message, {
    type: 'error',
  });
