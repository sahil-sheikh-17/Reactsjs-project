"use client";
import "bootstrap/dist/css/bootstrap.css";
import { Providers } from "@/redux/provider";
import Header from "@/components/header";
import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main> {children}</main>
        </Providers>
      </body>
    </html>
  );
}
