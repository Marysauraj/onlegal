import axios from "axios";

export const getCategories = (country = "AR") => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/categories?country=${country}`)
    .then((response) => response.data.categories);
};
