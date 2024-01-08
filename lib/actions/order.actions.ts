"use server"

import Stripe from "stripe"

import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs"

import { CheckoutOrderParams } from "@/types"
import { handleError } from "../utils"

export const checkoutOrder = async (order: CheckoutOrderParams) => {
  const { session } = auth()

  const userId = session?.userId as string

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const price = Number(order.price) * 100

  try {
   const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: price,
            product_data: {
              name: order.listingTitle
            }
          },
          quantity: 1
        },
      ],
      metadata: {
        listingId: order.listingId,
        buyerId: order.buyerId,
      },
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
    });
    redirect(session.url!)
  } catch (error) {
    throw error
  }
}