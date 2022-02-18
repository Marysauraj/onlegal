import axios from "axios";

export const getBrandRegistryInfo = (country = "AR") => {
  return {
    title: "Registrá tu Marca con OnLegal",
    description: "La forma más sencilla de proteger tu marca",
    long_description:
      "​Una marca es un signo con capacidad distintiva que permite diferenciar de los demás aquellos productos o servicios que son propiedad de una persona o empresa. Registrarla te otorga el título de propiedad y derecho exclusivo sobre ella.",
    duration: "24 meses",
    price: {
      currency_code: "AR",
      currency_symbol: "$",
      amount: "9999",
    },
    faqs: [
      {
        question: "¿Qué servicios incluye la tarifa?",
        answer: "La tarifa incluye:",
        items: [
          "Búsqueda de antecedentes",
          "Clasificación de la marca",
          "Registro en una clase",
          "Entrega del título",
        ],
      },
      {
        question: "¿Qué servicios NO incluye la tarifa?",
        answer: "La tarifa NO incluye:",
        items: [
          "Registro en más de una clase",
          "Trámites de oposiciones",
          "Vistas administrativas del INPI",
        ],
      },
      {
        question:
          "¿Cuáles son los derechos que adquiero al registrar una marca?",
        answer:
          "Al registrar una marca, el propietario de la misma obtiene los siguientes derechos: ",
        items: [
          "La propiedad de tu marca en relación con los productos o servicios amparados por el registro.",
          "El derecho a utilizar de manera exclusiva tu marca en el mercado económico.",
          "Derecho a transferir el dominio de tu marca a terceros, ya sea vendiéndola o cediéndola gratuitamente.",
          "Derecho a licenciar el uso de manera exclusiva o no, a favor de terceros.",
          "Derecho a impedir que terceros sin tu autorización utilicen tu marca.",
          "Derecho a oponerse a la inscripción en el INPI de signos confundibles con el tuyo.",
          "Solicitar ante los Tribunales competentes la nulidad de otras marcas posteriores que sean confundibles con la marca de tu propiedad.",
        ],
      },
      {
        question: "¿Cuál es la vigencia de una marca?",
        answer:
          "La fecha de vigencia de la marca es de 10 años desde la fecha de concesión del registro, renovables indefinidamente por períodos iguales siempre que solicites la renovación.",
      },
      {
        question: "¿Cuál es la duración del tramite?",
        answer:
          "El trámite lleva veinticuatro (24) meses para las solicitudes que no pasan por Estudio Simplificado y doce (12) meses las que si pasan por Simplificado. Si recibe Oposiciones, el trámite puede demorar mucho más.",
      },
      {
        question: "¿Qué cosas no se consideran marcas?",
        items: [
          "Los nombres, palabras y signos que constituyen la designación necesaria o habitual del producto o servicio a distinguir, o que sean descriptos de su naturaleza, función, cualidades u otras características.",
          "Los nombres, palabras, signos y frases publicitarias que hayan pasado al uso general antes de su solicitud de registro.",
          "La forma que se dé a los productos.",
          "El color natural o intrínseco de los productos o un solo color aplicado sobre los mismos.",
        ],
      },
      {
        question: "¿Qué cosas no se pueden registrar?",
        items: [
          "Una marca idéntica a una registrada o solicitada con anterioridad para distinguir los mismos productos o servicios.",
          "Las marcas similares a otras ya registradas o solicitadas para distinguir los mismos productos o servicios.",
          "Las denominaciones de origen nacional o extranjeras.",
          "Se entiende por denominación de origen el nombre de un país de una región, de un lugar o área geográfica determinado que sirve para designar un producto originario de ellos y cuyas cualidades y características se deben exclusivamente al medio geográfico. También se considera denominación de origen la que se refiere a un área geográfica determinada para los fines de ciertos productos.",
          "Las marcas que sean susceptibles de inducir a error respecto de la naturaleza, propiedades, mérito, calidad, técnicas de elaboración, función, origen de precio u otras características de los productos o servicios a distinguir.",
          "Las palabras, dibujos y demás signos contrarios a la moral y a las buenas costumbres.",
          "Las letras, palabras, nombres, distintivos, símbolos, que usen o deban usar la Nación, las provincias, las municipalidades, las organizaciones religiosas y sanitarias<",
          "Las letras, palabras, nombres o distintivos que usen las naciones extranjeras y los organismos internacionales reconocidos por el gobierno argentino.",
          "El nombre, seudónimo o retrato de una persona, sin su consentimiento o el de sus herederos hasta el cuarto grado inclusive.",
          "Las designaciones de actividades, incluyendo nombres y razones sociales, descriptivas de una actividad, para distinguir productos. Sin embargo, las siglas, palabras y demás signos, con capacidad distintiva, que formen parte de aquéllas, podrán ser registrados para distinguir productos o servicios.",
          "Las frases publicitarias que carezcan de originalidad.",
        ],
      },
    ],
    documentation: [
      {
        items_title: "Información de la marca",
        items: [
          "Nombre de la marca",
          "Descripción del producto y/o servicio que ofrece",
          "Logo (6x6cm)",
        ],
      },
      {
        items_title: "Datos del titular",
        items: [
          "Nombre y apellido o Razón Social",
          "Estado civil y nombre de cónyuge (opcional)",
          "DNI o CUIT/CUIL",
          "Dirección",
          "Número de teléfono",
          "Email",
        ],
      },
    ],
  };
  // return axios
  //   .get(`${process.env.NEXT_PUBLIC_API_URL}/brand-registry?country=${country}`)
  //   .then((response) => response.data);
};
