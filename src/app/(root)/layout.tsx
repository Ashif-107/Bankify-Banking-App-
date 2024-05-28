import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedin = {firstName:'Ashif',lastName: 'KM'}

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedin}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
          <Image src="/icons/logo.svg" width={31} height={31} alt="logo icon"/>
          <div>
            <MobileNav user={loggedin}/>
          </div>
          </div>
       {children} 
        </div>
    </main>
  );
}
