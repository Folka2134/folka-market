// ====== USER PARAMS
export type CreateUserParams = {
  clerkId: string
  firstName: string
  lastName: string
  username: string
  email: string
  photo: string
}

export type UpdateUserParams = {
  firstName: string
  lastName: string
  username: string
  photo: string
}

// ====== LISTING PARAMS
export type CreateListingParams = {
  userId: string
  listing: {
    _id: string
    title: string,
    condition: string,
    location: string;
    genre: string[],
    console: string,
    price: number,
    categoryId: string,
    datePosted: Date,
  }
  path: string
}

export type UpdateListingParams = {
  userId: string
  listing: {
    _id: string
    title: string,
    condition: string,
    location: string;
    genre: string[],
    console: string,
    price: number,
    categoryId: string,
    datePosted: Date,
  }
  path: string
}

export type DeleteListingParams = {
  listingId: string
  path: string
}

export type GetAllListingParams = {
  query: string
  category: string
  limit: number
  page: number
}

export type GetListingsByUserParams = {
  userId: string
  limit?: number
  page: number
}

export type GetRelatedListingsByCategoryParams = {
  categoryId: string
  eventId: string
  limit?: number
  page: number | string
}

export type Listing = {
  _id: string
  title: string,
  condition: string,
  location: string;
  genre: string[],
  console: string,
  price: number,
  categoryId: string,
  datePosted: Date,
  category: {
    _id: string
    name: string
  },
  user: {
    _id: string
    firstName: string
    lastName: string
  }
}

// ====== CATEGORY PARAMS
export type CreateCategoryParams = {
  categoryName: string
}

// ====== ORDER PARAMS
export type CheckoutOrderParams = {
  listingTitle: string
  listingId: string
  price: string
  buyerId: string
}

export type CreateOrderParams = {
  stripeId: string
  listingId: string
  buyerId: string
  totalAmount: string
  createdAt: Date
}

export type GetOrdersByListingParams = {
  listingId: string
  searchString: string
}

export type GetOrdersByUserParams = {
  userId: string | null
  limit?: number
  page: string | number | null
}

// ====== URL QUERY PARAMS
export type UrlQueryParams = {
  params: string
  key: string
  value: string | null
}

export type RemoveUrlQueryParams = {
  params: string
  keysToRemove: string[]
}

export type SearchParamProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}