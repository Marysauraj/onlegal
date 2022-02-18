import axios from "axios";

export const getRateRenegotiation = (country = "AR") => {
  return {
    title: "Negociá las tarifas de tus servicios",
    description: "Hacemos que pagues menos por tus servicios",
    note: "Pagás solo si la negociación es exitosa",
    price: {
      currency_code: "AR",
      currency_symbol: "$",
      amount: "699",
    },
    long_description:
      "El servicio de Negociación de Tarifas tiene como objetivo que el usuario pague lo justo por su servicio de internet, telefonía móvil o de seguro automotor. El equipo de OnLegal se encarga de llamar al proveedor del servicio e intentará conseguir un beneficio para el usuario.",
    long_description_2:
      "Los beneficios pueden ser: un descuento en su próxima factura, mejorar el nivel de servicio que recibe actualmente (crédito, velocidad del internet, megas, etc), entre otros beneficios.",
    faqs: [
      {
        question: "¿Cómo funciona el servicio?",
        items: [
          "El usuario completa el formulario con la información del servicio que quiere renegociar.",
          "El equipo de negociadores de OnLegal se pondrán en contacto con el proveedor del servicio para entender la situación e intentar conseguir una mejor tarifa para el usuario.",
          "El equipo de OnLegal se pone en contacto con el usuario para comunicarle el resultado de la negociación.",
          "En caso de ser positiva para el usuario, deberá abonar AR$699 por la gestión.",
        ],
      },
      {
        question: "¿Cuál es el precio del servicio?",
        answer:
          "​La tarifa de la gestión es de AR$699 y solo se abona si la renegociación fue positiva para el usuario. Si el resultado no es beneficioso para el usuario, no deberá pagar por la gestión.",
      },
      {
        question: "¿Cuáles son los servicios que se pueden renegociar?",
        answer:
          "Actualmente trabajamos con empresas de telefonía móvil e internet:",
        items: [
          "Claro",
          "Movistar",
          "Personal",
          "Cablevisión/Fibertel",
          "Zurich",
          "Sancor Seguros",
          "La Caja Seguros",
          "Holando Seguros",
          "Mapfre",
        ],
      },
    ],
    documentation: [
      {
        items_title: "Información del servicio:",
        items: [
          "Número de cliente",
          "Monto de última factura",
          "Plan actual",
          "Foto de la última factura",
        ],
      },
      {
        items_title: "Datos del titular:​",
        items: [
          "Nombre y apellido",
          "DNI",
          "Dirección",
          "Número de teléfono",
          "Email",
        ],
      },
    ],
  };
  //   return axios
  //     .get(`${process.env.NEXT_PUBLIC_API_URL}/categories?country=${country}`)
  //     .then((response) => response.data.categories);
};
