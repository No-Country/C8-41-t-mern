import React, { useEffect } from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';

export default function MercadoPago(buyId) {
    const mercadopago = useMercadopago.v2('TEST-8163893a-3cbe-4481-ab6e-7686a91eb7a9', {
        locale: 'es-AR'
    });

    useEffect(() => {
        if (mercadopago) {
            mercadopago.checkout({
                preference: {
                    id: `${buyId}`,
                },
                render: {
                    container: '.cho-container',
                    label: 'Pagar Carrito',
                    
                }
            })
        }
    }, [mercadopago])

    return (
        <div>
            <div class="cho-container" />
        </div>
    )
}