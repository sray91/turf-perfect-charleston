import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Turf Perfect Charleston",
  description: "The premier artificial turf company for the lowcountry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TopBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}