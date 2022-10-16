import axiosInstance from "./axiosInstance";

export const getAllPets = () => {
  return axiosInstance.get("/pets/all");
};

export const getPetsByCategory = ({ category }) => {
  return axiosInstance.get(`/pets/category/${category}`);
};

export const getPetById = ({ id }) => {
  return axiosInstance.get(`/pets/get/${id}`);
};
