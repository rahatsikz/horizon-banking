import Sidebar from "@/components/Sidebar";

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Rahat", lastName: "Sikder" };

  return (
    <main className='font-inter flex h-screen w-full'>
      <Sidebar user={loggedIn} />
      {children}
    </main>
  );
}
