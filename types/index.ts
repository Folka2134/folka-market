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
    imageUrl: string,
    title: string,
    condition: string,
    location: string;
    console: string,
    price: string,
    category: string,
    datePosted: Date,
  }
  path: string
}

export type UpdateListingParams = {
  userId: string
  listing: {
    _id: string | undefined
    imageUrl: string,
    title: string,
    condition: string,
    location: string;
    console: string,
    price: string,
    category: string,
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
  pages: number
  limit: number
}

export type GetListingsByUserParams = {
  userId: string
  limit?: number
  page: number
}

export type GetRelatedListingsByCategoryParams = {
  category: string
  eventId: string
  limit?: number
  page: number | string
}

export type Listing = {
  _id: string
  title: string,
  condition: string,
  location: string;
  console: string,
  price: string,
  category: string,
  datePosted: Date,
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
  listingId: string
  buyerId: string
  price: string
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