import axios from "axios";

const shoeAPI = axios.create({
  baseURL: "http://localhost:3000",
});

export const getBrands = async () => {
  const response = await shoeAPI.get(`/brands/shoe/list`);
  return response.data;
};

export const getShoesDiscover = async ({ page }) => {
  const response = await shoeAPI.get(`/discover/shoes`, {
    params: {
      page,
    },
  });
  return response.data;
};
