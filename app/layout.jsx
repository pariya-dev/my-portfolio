import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  subsets: ["latin"],
});


export const metadata = {
  title: "Home | Pariya Singchalad",
  description: "Personal website of Pariya Singchalad",
  icons: {
    icon: "/favicon.ico", 
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}