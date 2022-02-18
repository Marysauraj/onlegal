import axios from "axios";

export const getContractStepsTitles = (contract) =>
  contract.sections.map((item) => item.section_title);

export const getContractStepIds = (contract) =>
  contract.sections.map((item) => item.section_id);

export const getContractInformationByCountry = (country = "AR") => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/contracts_info?country=${country}`)
    .then((response) => response.data);
};

export const getPopularContractsByCountry = async (country = "AR") => {
  const popularContractIDs = [
    "RENTAL_CONTRACT",
    "AUTOMOTIVE_SALE_CONTRACT",
    "TOURISM_RENTAL_CONTRACT",
    "WEB_DEVELOPMENT_CONTRACT",
    "CONFIDENTIALITY_CONTRACT",
    "FOOD_AGREEMENT_CONTRACT",
  ];
  const contracts = await getContractInformationByCountry(country);
  return contracts.filter((contractInfo) =>
    popularContractIDs.includes(contractInfo.type)
  );
};

export const getContractInformationBySlugAndCountry = (
  slug,
  country = "AR",
  includes = ["all"]
) => {
  return axios
    .get(
      `${
        process.env.NEXT_PUBLIC_API_URL
      }/contracts_info/by_slug/${slug}?country=${country}&include=${includes.join(
        ","
      )}`
    )
    .then((response) => response.data);
};
