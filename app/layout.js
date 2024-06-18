"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@/components/material/MTailwind";
import Header from "@/app/sections/header";
import Footer from "@/app/sections/footer";
import "@/app/globals.css";
import "@/components/styles/layout.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.onscroll = function () {
      myFunction();
    };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }, []);
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
          <div className="content">{children}</div>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
