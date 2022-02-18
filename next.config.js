module.exports = {
  async redirects() {
    return [
      {
        source: "/documentos/contrato-alquiler-inmueble",
        destination: "/documentos/contrato-alquiler-vivienda",
        permanent: true,
      },
      {
        source: "/documentos-legales/contrato-de-alquiler",
        destination: "/documentos/contrato-alquiler-vivienda",
        permanent: true,
      },
      {
        source: "/documentos-legales/contrato-de-alquiler-de-inmueble",
        destination: "/documentos/contrato-alquiler-vivienda",
        permanent: true,
      },
      {
        source: "/documentos-legales/contrato-de-alquiler-para-turismo",
        destination: "/documentos/contrato-alquiler-turismo",
        permanent: true,
      },
      {
        source: "/documentos-legales/compraventa-de-automotor",
        destination: "/documentos/contrato-compraventa-automotor",
        permanent: true,
      },
      {
        source: "/documentos-legales/boleto-compraventa-inmueble",
        destination: "/documentos/boleto-compraventa-inmueble",
        permanent: true,
      },
      {
        source: "/documentos-legales/desarrollo-web",
        destination: "/documentos/contrato-desarrollo-web",
        permanent: true,
      },
      {
        source: "/documentos-legales/contrato-de-confidencialidad",
        destination: "/documentos/contrato-confidencialidad-servicios",
        permanent: true,
      },
      {
        source: "/documentos-legales/terminos-y-condiciones",
        destination: "/documentos/terminos-condiciones-uso-sitio-web",
        permanent: true,
      },
      {
        source: "/visitors/legal_docs",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
