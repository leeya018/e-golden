// app/checkout/page.tsx

"use client";

import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const CheckoutPage = () => {
  const items: Item[] = [
    {
      title: "package1",
      price: 10,
    },
  ];
  const initialOptions: any = {
    "client-id": process.env.NEXT_PUBLIC_API_PAYPAL_KEY,
    currency: "USD",
    intent: "capture",
  };

  type Item = {
    title: string;
    price: number;
  };
  const createOrder = (data: any, actions: any) => {
    const totalValue = items.map((item, acc) => item.price + acc, 0);
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: totalValue,
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: totalValue,
              },
            },
          },
          items: items,
        },
      ],
    });
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then((details: any) => {
      alert("Transaction completed by " + details.payer.name.given_name);
    });
  };

  return (
    <div className="flex flex-col  justify-center items-center h-screen">
      <div>
        <h2>{items[0].title}</h2>
        <div>{items[0].price}$</div>
      </div>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
      </PayPalScriptProvider>
    </div>
  );
};

export default CheckoutPage;
