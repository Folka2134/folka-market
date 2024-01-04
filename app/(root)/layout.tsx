import Header from "@/components/shared/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col px-64">
      <Header />
      <main className="flex-1">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
