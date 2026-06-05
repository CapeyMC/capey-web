import type {Metadata} from "next";
import {Fredoka, Poppins, Rubik} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["400"],
});

const fredoka = Fredoka({
  variable: "--fredoka",
  subsets: ["latin"],
  weight: ["400"],
});

const rubik = Rubik({
  variable: "--rubik",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Capey",
  description: "Have a custom cape which others who use this mod can see too",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${fredoka.variable} ${rubik.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
