// app/checkout/page.tsx

"use client";

import React from "react";
import {
  PayPalButtons,
  PayPalHostedField,
  PayPalHostedFieldsProvider,
  PayPalScriptProvider,
  usePayPalCardFields,
} from "@paypal/react-paypal-js";
import { useParams } from "next/navigation";
import { languageStore } from "@/mobx/languageStore";
import { Package } from "@/interfaces/Package";

const PaymentPage = () => {
  const params = useParams();

  const { translations } = languageStore;

  const { packageName } = params as {
    packageName: string;
  };

  const packages =
    translations.services["residency_relocation"].details.packages;
  const chosenPackage = packages.find((p: Package) => p.label === packageName);

  console.log({ chosenPackage });

  const { label, price } = chosenPackage;
  const item: Item = {
    title: "label",
    price: 1,
  };

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
    const totalValue = 1;
    // const totalValue = chosenPackage.price;
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
          items: [item],
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
        <h2>{item.title}</h2>
        <div>{item.price}$</div>
      </div>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
      </PayPalScriptProvider>
    </div>
  );
};

export default PaymentPage;
