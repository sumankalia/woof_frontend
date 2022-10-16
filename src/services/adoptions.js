import axiosInstance from "./axiosInstance";

export const createAdoption = (payload) => {
  return axiosInstance.post("/adoption/create", payload);
};
