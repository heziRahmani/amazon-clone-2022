import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentOptions";

const PUBLIC_KEY =
  "pk_test_51LJC06JZOZ9whYl8Li4b0DJAqlNq9YmqzjETLK86MeUag2ZzQKmEZvQcaYN5RWlPIfbFOGPu4yBZH6F3zACHjK7u00IKcybQmt";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
