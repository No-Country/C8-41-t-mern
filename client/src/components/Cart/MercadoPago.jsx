import React, { useEffect } from "react";
import { useMercadopago } from "react-sdk-mercadopago";
const FORM_ID = "payment-form";
export default function MercadoPago({ buyId }) {
  const mercadopago = useMercadopago.v2(
    "TEST-8163893a-3cbe-4481-ab6e-7686a91eb7a9",
    {
      locale: "es-AR",
    }
  );
  // MERCADOPAGO V2

  useEffect(() => {
    if (mercadopago) {
      mercadopago.checkout({
        preference: {
          id: `${buyId}`,
        },
        render: {
          container: ".cho-container",
          label: "Pagar Carrito",
        },
      });
    }
  }, [buyId]);

  //MERCADOPAGO V1
  // useEffect(() => {
  //     console.log("buy id issss");
  //     console.log(buyId);
  //     if (buyId) {
  //       // con el preferenceId en mano, inyectamos el script de mercadoPago
  //       const script = document.createElement('script');
  //       script.type = 'text/javascript';
  //       script.src =
  //         'https://www.mercadopago.ar/integrations/v1/web-payment-checkout.js';
  //       script.setAttribute('data-preference-id', buyId);
  //       const form = document.getElementById(FORM_ID);
  //       form.appendChild(script);
  //     }
  //   }, [buyId]);
  let refmp;
  return (
    //MERCADOPAGO V2

    <div class="cho-container" />

    // <form id={FORM_ID} method="GET">
    //     <button type="submit" on>PAGAR</button>
    // </form>
  );
}
