import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Minh Le - Software Engineer",
  description: "Minh Le - Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-transparent to-orange-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
