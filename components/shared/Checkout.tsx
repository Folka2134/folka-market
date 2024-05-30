import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

import { Button } from "../ui/button";
import { IListing } from "@/lib/database/models/listing.model";
import { checkoutOrder } from "@/lib/actions/order.actions";

type CheckoutProps = {
  listing: IListing;
  userId: string;
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout = ({ listing, userId }: CheckoutProps) => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const onCheckout = async () => {
    const order = {
      listingTitle: listing.title,
      listingId: listing._id,
      price: listing.price,
      buyerId: userId,
    };

    await checkoutOrder(order);
  };

  return (
    <form action={onCheckout} method="post">
      <Button
        className="w-full button hover:bg-[#9900FF] hover:text-white transition-all duration-200 border-2"
        type="submit"
        role="link"
        size="lg"
      >
        Buy product
      </Button>
    </form>
  );
};

export default Checkout;
