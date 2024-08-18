"use server"

import Stripe from "stripe"

import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs"

import { CheckoutOrderParams, CreateOrderParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "../database"
import OrdersPage from "@/app/(root)/profile/[id]/orders/page"
import Order from "../database/models/order.model"

export const checkoutOrder = async (order: CheckoutOrderParams) => {
  const { session } = auth()

  const userId = session?.userId as string

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const price = Math.round(par(order.price)) * 100;

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

export const createOrder = async (order: CreateOrderParams) => {
  try {
    await connectToDatabase()

    const newOrder = await Order.create({
      ...order,
      listing: order.listingId,
      buyer: order.buyerId
    })

    return JSON.parse(JSON.stringify(newOrder))
  } catch (error) {
    handleError(error)
  }
}