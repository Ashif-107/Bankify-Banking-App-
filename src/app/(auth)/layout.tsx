import Image from "next/image";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex  w-full justify-between font-inter">
         {children} 
         <div className="w-[100%] bg-gradient-mesh  bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
          <div className="transition-transform transform hover:translate-x-5 hover:t-ranslate-y-5 hover:scale-110 duration-300 ease-in-out">
            <Image src="/icons/logo.svg" width={216} height={190} alt="logo"/>
          </div>
          <div className="flex flex-col items-center justify-center mt-12">
            <h1 className="text-[50px] font-ibm-plex-serif font-bold text-black mb-6 ">BANKIFY</h1>
            <p className="text-[30px] font-serif font-bold text-grey">Banking at Your Fingertips</p>
          </div>
         </div>
      </main>
    );
  }
  