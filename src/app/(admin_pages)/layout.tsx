import "@/styles/globals.css";
import { Inter } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Minh Le - Software Engineer",
  description: "Minh Le - Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body
          className={`${inter.className} bg-gradient-to-b from-transparent via-white to-orange-50 min-h-screen min-w-[360px]`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
