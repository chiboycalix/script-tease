"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@/components/material/MTailwind";
import Header from "@/app/sections/header";
import Footer from "@/app/sections/footer";
import "@/app/globals.css";
import "@/components/styles/layout.css";

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
          <div className="content lg:mt-[5rem] mt-[4rem]">{children}</div>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
