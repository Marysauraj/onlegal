import axios from "axios";

export const sendMessage = (data) => {
  return axios
    .post(
      `${process.env.NEXT_PUBLIC_API_URL}/communications/web_contact_form`,
      data
    )
    .then((response) => {
      return {
        success: true,
        data: response.data,
      };
    })
    .catch((error) => {
      throw error;
    });
};
