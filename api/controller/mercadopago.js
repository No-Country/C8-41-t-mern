import axios from "axios";

const compraMp = async (req, res) => {
  const order = req.body;
  if (order.orderItems.length > 0) {
    const url2=" http://localhost:3001/api/orders"
    const url = "https://api.mercadopago.com/checkout/preferences";
    const items = order.orderItems.map((item) => {
      return {
        title: item.name,
        description: item.description,
        currency_id: "ARS",
        quantity: item.quantity,
        unit_price: item.price,
      };

      //notification_url: `${{}}`,
    });

    try {
      const buyOrder = {
        items: items,

        // {
        //   title: order.orderItems.name,
        //       description: order.orderItems.description,
        //       currency_id: "ARS",
        //       quantity: order.orderItems.quantity,
        //       unit_price: order.orderItems.price,
        //       //notification_url: `${{}}`,
        // },
        payer: {
          phone: { phone: order.phone },
          identification: {},
          address: order.shippingAddress,
          email: order.email,
        },
        back_urls: {
          // success: `${VITE_BACKEND_URL}/api/orders`,
          success: 'http://localhost:3000/operation',
          pending: "Su pago esta pendiente",
          failure: "El pago a fallado",
        },
        notification_url: "",
      };

      const result = await axios({
        method: "post",
        url: url,
        headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` },
        data: buyOrder,
      });

      // Pedido a la ruta de orders
      // const result2 = await axios({
      //   method: "post",
      //   url: url2,
      //   headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` },
      //   data: {
      //     street:order.shippingAddress.address, 
      //     phone:order.phone, 
      //     uid:order.userId, 
      //     totalPrice:order.totalPrice,
      //     cart:order.orderItems
      //   },
      // });

      console.log(result.data.id);
      // res.send(result.data.init_point); //ENLACE DE FORMATO DE PAGO
      return res.send(result.data.id); //ID de preferencia del formato
    } catch (error) {
      
    }
  } else {
    res.send("no hay items");
  }
};

export default compraMp;
