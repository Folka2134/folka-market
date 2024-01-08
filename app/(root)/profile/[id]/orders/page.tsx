import { auth } from "@clerk/nextjs";

import { getListingsByUser } from "@/lib/actions/listing.actions";
import ListingList from "@/components/shared/ListingList";

type OrdersPageProps = {
  params: {
    id: string;
  };
};

const OrdersPage = async ({ params: { id } }: OrdersPageProps) => {
  const userListings = await getListingsByUser({ userId: id, page: 1 });

  return (
    <div>
      <h2 className="flex justify-center my-5 font-medium text-xl">Orders</h2>
      <ListingList
        data={userListings?.data}
        emptyTitle="No user listings"
        listTitle="User listings"
      />
    </div>
  );
};

export default OrdersPage;
