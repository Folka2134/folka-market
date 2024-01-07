import { Schema, model, models, Document } from "mongoose";

export interface IListing extends Document {
  _id: string
  imageUrl: string
  title: string,
  condition: string,
  location: string;
  category: string,
  console: string,
  price: string,
  datePosted: Date,
  user: { _id: string, firstName: string, lastName: string },
}


const ListingSchema = new Schema({
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  condition: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  console: { type: String, required: true },
  price: { type: String, required: true },
  datePosted: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Listing = models.Listing || model('Listing', ListingSchema);

export default Listing;