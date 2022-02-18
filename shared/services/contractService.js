import axios from "axios";

export const getContractStepsFromSummary = (contract) =>
  contract.sections.map((item) => item.title);

export const createContract = (data) => {
  return axios.post("/api/contracts", data).then((res) => res.data);
};

export const saveSection = async (contractId, sectionId, data) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/contracts/${contractId}/sections/${sectionId}`;

  return axios
    .put(url, data)
    .then((response) => {
      return {
        success: true,
        data: response.data,
      };
    })
    .catch((error) => {
      if (error.response.status === 400) {
        return {
          success: false,
          errors: error.response.data.error_attributes,
        };
      } else {
        throw error;
      }
    });
};

export const saveRecipient = async (contractId, comments = "") => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/contracts/${contractId}/recipient`;

  return axios.put(url, { comments }).then((res) => res.data);
};

export const getContract = (contractId) => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/contracts/${contractId}`)
    .then((res) => res.data);
};

export const getContractSummary = (contractId) => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/contracts/${contractId}/summary`)
    .then((res) => res.data);
};

export const getSection = (contractId, section) => {
  return axios
    .get(
      `${process.env.NEXT_PUBLIC_API_URL}/contracts/${contractId}/sections/${section}`
    )
    .then((res) => res.data);
};

export const resetContractCookies = (cookies) => {
  cookies.set("onlegal_contractid");
  cookies.set("onlegal_contracttype");
};
