import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col px-2 sm:px-10 lg:px-16 ">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
