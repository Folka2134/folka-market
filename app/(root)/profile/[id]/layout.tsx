import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default function ProfileLayout({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const { sessionClaims } = auth();
  const currentUser = sessionClaims?.userId as string;

  return (
    <div className="flex flex-col px-2 sm:px-10 lg:px-16 2xl:px-64">
      {currentUser === id && (
        <div>
          <ul className="flex gap-5 justify-center mt-10 text-lg font-semibold">
            <Link href={`/profile/${currentUser}/listings`}>Listings</Link>
            <Link href={`/profile/${currentUser}/saved`}>Saved</Link>
            <Link href={`/profile/${currentUser}/orders`}>Orders</Link>
          </ul>
        </div>
      )}
      <main className="flex-1">{children}</main>
    </div>
  );
}
