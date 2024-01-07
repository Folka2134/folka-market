import * as z from "zod";

export const listingFormSchema = z.object({
  imageUrl: z.string(),
  title: z.string().min(2, {
    message: "Title must be at least 3 characters.",
  }).max(50, {
    message: "Title must be less than 50 characters.",
  }),
  condition: z.string().min(2, {
    message: "Please select a product condition"
  }),
  location: z.string().min(2, {
    message: "Location must be at least 3 characters.",
  }),
  category: z.string().min(2, {
    message: "Please select a product category"
  }),
  console: z.string().min(2, {
    message: "Please select a console"
  }),
  price: z.string().min(2, {
    message: "Please provide a price"
  }),
  datePosted: z.date(),
});
