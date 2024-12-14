import { Inter } from "next/font/google";
import "./globals.css";

// Inter fontunu dahil edin
const inter = Inter({
  subsets: ["latin"], // Latin karakter desteği
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // İstediğiniz ağırlıkları belirtin
});

export const metadata = {
  title: "ayd1ndemirci",
  description: "Made with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
