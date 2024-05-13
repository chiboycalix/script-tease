import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Head from "next/head";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Script Tease",
  description: "Script Tease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
