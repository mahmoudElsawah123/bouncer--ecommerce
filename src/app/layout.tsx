import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./Components/Navbar/Navbar";
import { Providers } from "./redux/Provider";
import React from "react";
import dynamic from "next/dynamic";

const FooterComponent = dynamic(() => import('./Components/Footer/FooterComponent'));
const myFont = localFont({
  src: "./assets/FontsFree-Net-Proxima-Nova-Sbold.otf",
});

export const metadata = {
  title: "Bouncer",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt qui itaque quaerat possimus voluptas, illum ipsa, earum recusandae nobis dolore,",
    openGraph: {
    images:  ``,
    title: "Bouncer",
    url : '',
    site_name : 'IMDb',
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt qui itaque quaerat possimus voluptas, illum ipsa, earum recusandae nobis dolore,",
    email : '',
    phone_number : '201067439828',
    latitude : '30.9763086',
    longitude : '31.1595836',
    locality : '',
    countryName : 'Egypt',
    streetAddress : ''
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${myFont.className} antialiased`}>
          <nav>
            <Navbar />
          </nav>
          {children}
          <footer>
            <FooterComponent />
          </footer>
        </body>
      </Providers>
    </html>
  );
}
