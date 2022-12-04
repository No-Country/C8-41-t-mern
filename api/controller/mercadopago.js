import axios from "axios";

const compraMp = async (req, res) => {
  const { items } = req.body;

  const url = "https://api.mercadopago.com/checkout/preferences";
  try {
    console.log(items[0].quantity);
    const cuerpo = {
      items: [
        {
          title: items[0].title,
          description: items[0].description,
          currency_id: "ARS",
          quantity: items[0].quantity,
          unit_price: 10,
          //notification_url: `${{}}`,
        },
      ],
      payer: {
        phone: { 3873: "356181" },
        identification: {},
        address: {
          zip_code: "2585",
          street_name: "avenida siempre viva",
          street_number: 1234,
        },
      },
      back_urls: {
        success: "Todo salio bien",
        pending: "Su pago esta pendiente",
        failure: "El pago a fallado",
      },
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
