import axiosInstance from "./axiosInstance";

export const getAllCategories = () => {
  return axiosInstance.get("/category/all");
};
