import axios from "axios";

export const searchMerchantOrders = (contractId) => {
  return axios
    .get(
      `https://api.mercadopago.com/merchant_orders/search?external_reference=${contractId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MELI_ACCESS_TOKEN}`,
        },
      }
    )
    .then((response) => response.data);
};

export const createPreference = (
  title,
  currency,
  price,
  payerEmail,
  contractId
) => {
  return axios
    .post(
      `https://api.mercadopago.com/checkout/preferences`,
      {
        items: [
          {
            title,
            currency_id: currency,
            unit_price: price,
            quantity: 1,
            picture_url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/favicon/android-chrome-384x384.png`,
          },
        ],
        payer: {
          email: payerEmail,
        },
        payment_methods: {
          excluded_payment_types: [
            { id: "ticket" },
            { id: "bank_transfer" },
            { id: "atm" },
          ],
          default_installments: 1,
        },
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/crear-contrato/pago?mpstatus=success`,
          pending: `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/crear-contrato/pago?mpstatus=pending`,
          failure: `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/crear-contrato/pago?mpstatus=error`,
        },
        notification_url: `${process.env.NEXT_PUBLIC_API_URL}/contracts/webhooks`,
        statement_descriptor: "OnLegal",
        auto_return: "approved",
        external_reference: contractId,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.MELI_ACCESS_TOKEN}`,
        },
      }
    )
    .then((response) => response.data);
};
