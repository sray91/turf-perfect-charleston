import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: "Turf Perfect Charleston",
  description: "The premier artificial turf company for the lowcountry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head />
      <body className="antialiased">
        <TopBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}