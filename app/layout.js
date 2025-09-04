// import Logo from "@/app/_components/Logo";
// import Navigation from "@/app/_components/Navigation";

// import "@/app/_styles/globals.css";
import "../app/_styles/globals.css";
import { Public_Sans } from "next/font/google";
import Footer from "./_components/FooterWrapper";
import FooterWrapper from "./_components/FooterWrapper";

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / Ross Ai",
    default: "Welcome / The Ross Ai",
  },
  // description:
  //   "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.className}   antialiased bg-black text-primary-100 min-h-screen flex flex-col relative`}
      >
        {/* <Header /> */}

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      <FooterWrapper />
      </body>
    </html>
  );
}
