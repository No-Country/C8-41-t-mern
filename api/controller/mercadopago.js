import axios from "axios";

const compraMp = async (req, res) => {
  const { user } = req.body;

  const url = "https://api.mercadopago.com/checkout/preferences";
  try {
    const cuerpo = {
      items: [
        {
          title: "orden-1",
          description: "hola",
          currency_id: "ARS",
          quantity: 1,
          unit_price: 10,
          //notification_url: `${{}}`,
        },
      ],
      payer: {
        phone: { area_code: "3873", number: "356181" },
        identification: {},
        address: {
          zip_code: "2585",
          street_name: "avenida siempre viva",
          street_number: 1234,
        },
        email: "hola@htmail.com",
      },
      back_urls: {
        success: "Todo salio bien",
        pending: "Su pago esta pendiente",
        failure: "El pago a fallado",
      },
      notification_url: "",
    };

    const result = await axios({
      method: "post",
      url: url,
      headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` },
      data: cuerpo,
    });

    res.send(result.data.init_point);
  } catch (error) {
    console.log(error);
  }
};

export default compraMp;
