import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Buttons from "@/components/Buttons/Buttons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Photo Album",
  description: "Album de fotos tipo, con fotos obtenidas desde la API de Pexels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Buttons />
        {children}
        <Footer />
      </body>
    </html>
  );
}
