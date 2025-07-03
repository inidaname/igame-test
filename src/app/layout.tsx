import type { Metadata } from "next";

import AuthCheck from "@/components/auth-check";

import "./globals.css";

export const metadata: Metadata = {
  title: "iGame Assignment",
  description: "A take home assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthCheck>{children}</AuthCheck>
      </body>
    </html>
  );
}
