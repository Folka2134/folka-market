"use server"

import { CreateListingParams, DeleteListingParams, GetAllListingParams, GetListingsByUserParams, UpdateListingParams } from "@/types"
import { connectToDatabase } from "../database"
import User from "../database/models/user.model"
import Listing from "../database/models/listing.model"
import { revalidatePath } from "next/cache"
import { handleError } from "../utils"
import ListingsPage from "@/app/(root)/profile/[id]/listings/page"

const getUserDetails = async (query: any) => {
  return query.populate({ path: "user", model: User, select: "_id firstName lastName" })
}

export const createListing = async ({ listing, userId, path }: CreateListingParams) => {
  try {
    await connectToDatabase()

    const user = await User.findById(userId)

    if(!user) {
      throw new Error("User not found")
    }

    const newListing = await Listing.create({ ...listing, user: userId })
    revalidatePath(path)
    return JSON.parse(JSON.stringify(newListing))
  } catch (error) {
    handleError(error)
  }
}

export const updateListing = async ({ listing, userId, path}: UpdateListingParams) => {
  try {
    await connectToDatabase()

    const listingToUpdate = await Listing.findById(listing._id)

    if(!listingToUpdate) {
      throw new Error("Listing not found")
    }

    if(listingToUpdate.user !== userId) {
      throw new Error("Unauthorized action")
    }

    const updatedListing = await Listing.findByIdAndUpdate(
      listing._id,
      { ...listing },
      { new: true }
    )

    return JSON.parse(JSON.stringify(updatedListing))
  } catch (error) {
    handleError(error)
  }
}

export const deleteListing = async ({ listingId, path }: DeleteListingParams) => {
  try {
    await connectToDatabase()

    const deletedListing = await Listing.findById(listingId)

    if(deletedListing) revalidatePath(path)
  } catch (error) {
    handleError(error)
  }
}

export const getAllListings = async ({query, limit= 6, pages }: GetAllListingParams) => {
  try {
    await connectToDatabase()

    const titleCondition = query ? { title: { $regex: query, $options: "i" }} : {}
    
    const conditions = {
      $and: [titleCondition]
    }

    const listingsQuery = Listing.find(conditions).sort({createdAt: "desc"}).skip(0).limit(limit)
    
    const listings = await getUserDetails(listingsQuery)
    const listingsCount = await Listing.countDocuments(conditions)

    return { data: JSON.parse(JSON.stringify(listings)), totalPages: Math.ceil(listingsCount / limit) }
  } catch (error) {
    handleError(error)
  }
}

export const getListingsByCategory = async (category: string) => {
  try {
    await connectToDatabase()
    
    const conditions = { category: category}

    const listingsQuery =  Listing.find(conditions).sort({ createdAt: "desc"})

    const listings = await getUserDetails(listingsQuery)

    return { data: JSON.parse(JSON.stringify(listings))}
  } catch (error) {
    handleError(error)
  }
}

export const getListingById = async (listingId: string) => {
  try {
    await connectToDatabase()

    const listing = await Listing.findById(listingId)

    if(!listing) {
      throw new Error("Listing not found")
    }

    return JSON.parse(JSON.stringify(listing))
  } catch (error) {
    handleError(error)
  }
}


export const getListingsByUser = async ({ userId, limit=6, page}: GetListingsByUserParams) => {
  try {
    await connectToDatabase()

    const conditions = { user: userId }
    const skipAmount = (page - 1) * limit

    const listingsQuery =  Listing.find(conditions).sort({ createdAt: "desc"}).skip(skipAmount).limit(limit)

    const listings = await getUserDetails(listingsQuery)
    const listingsCount = await Listing.countDocuments(conditions)

    return { data: JSON.parse(JSON.stringify(listings)), totalPages: Math.ceil(listingsCount / limit) }
  } catch (error) {
    handleError(error)
  }
}


export const deleteListingById = async ({ listingId, path}: DeleteListingParams) => {
  try {
    await connectToDatabase()

    const deletedListing = await Listing.findByIdAndDelete(listingId)

    if(deletedListing) console.log("listing deleted");
    

  } catch (error) {
    handleError(error)
  }
}