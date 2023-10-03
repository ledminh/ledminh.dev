import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Minh Le - Software Engineer",
  description: "Minh Le - Software Engineer",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-transparent via-white to-orange-50 min-h-screen`}
      >
        {children}
        {modal}
      </body>
    </html>
  );
}
