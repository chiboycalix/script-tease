"use client";
import "./globals.css";
import Header from "./header";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { Button } from "@/components/ui/button";
import "./layout.css";
import { NavbarWithMegaMenu } from "./nav";

export default function RootLayout({ children }) {
  React.useEffect(() => {
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
          <div className="flex justify-between items-center px-[2rem] py-[1rem] bg-white">
            <div className="hidden lg:block">Revenue</div>
            <p className="lg:hidden block">+1 (555) 555-1234</p>
            <div className="flex justify-between items-center gap-5">
              <div className="">
                <Button className="bg-primary text-white lg:bg-white lg:text-black">
                  Meet Sponsors
                </Button>
              </div>
              <div className="hidden lg:block">
                <p>+1 (555) 555-1234</p>
              </div>
            </div>
          </div>
          <div id="myHeader" className="myHeader">
            {/* <Header /> */}
            <hr className="block lg:hidden text-black opacity-100"/>
            <NavbarWithMegaMenu />
          </div>
          
          <div className="content">{children}</div>
        </body>
      </ThemeProvider>
    </html>
  );
}
