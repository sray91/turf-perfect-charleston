import Footer from "@/components/BlogFooter";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `Next.js Blog Example with ${CMS_NAME}`,
  description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function BlogLayout({ children }) {
  return (
    <div className={`${inter.className} dark:bg-slate-900 dark:text-slate-400 min-h-screen`}>
      <div>{children}</div>
      <Footer />
    </div>
  );
}