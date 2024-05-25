"use client";
import "./globals.css";
import Header from "./header";
import Head from "next/head";
import { ThemeProvider } from "@material-tailwind/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider>
        <body>
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
