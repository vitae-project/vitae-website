import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import SmoothScroll from "@/components/main/lenis";

const inter = Open_Sans({ subsets: ["latin"]})

export const metadata = {
  title: "Vitae",
  description: "Track, Apply, Achieve",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SmoothScroll>
        <body className={`${inter.className} antialiased`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </SmoothScroll>
    </html>
  );
}
