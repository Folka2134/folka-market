import { Schema, model, models, Document } from 'mongoose'

// stripeId: string
export interface IOrder extends Document {
  _id: string
  createdAt: Date
  price: string
  listing: {
    _id: string
    title: string
  }
  buyer: {
    _id: string
    firstName: string
    lastName: string
  }
}

export type IOrderItem = {
  _id: string
  price: string
  createdAt: Date
  listingTitle: string
  listingId: string
  buyer: string
}

const OrderSchema = new Schema({
  stripeId: {
    type: String,
    // required: true,
    unique: true,
  },
  price: {
    type: String,
  },
  listing: {
    type: Schema.Types.ObjectId,
    ref: 'Listing',
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Order = models.Order || model('Order', OrderSchema)

export default Order