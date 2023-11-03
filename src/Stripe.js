import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Checkout";

const publishableKey =
  "pk_test_51M6HH1DbwsTqqvezGHc9zCMmRA84s9h16VFbXMki8MBacJQx68ZBsiTqpoGgidn10lC5XjSJzT2NtbnvmozmXksI00gj2dtJ9q";
const stripePromise = loadStripe(publishableKey);

const Stripe = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Stripe;
