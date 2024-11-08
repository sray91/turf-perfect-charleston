import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `The official blog of Turf Perfect Charleston`,
  description: `Your home for tips and tricks for getting the most from your synthetic turf in Charleston, SC.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function BlogLayout({ children }) {
  return (
    <div className={`${inter.className} min-h-screen`}>
      <div>{children}</div>
    </div>
  );
}