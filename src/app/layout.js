import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/CalSans-SemiBold.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/CalSans-SemiBold.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ayd1ndemirci",
  description: "Made with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
