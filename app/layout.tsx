import type { Metadata } from "next";
import {Poppins, Outfit} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import GlobalProvider from "./GlobalProvider";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Outfit({ weight: ["300", "400", "500", "600", "700", "800", "900"], subsets: ['latin']});


export const metadata: Metadata = {
  title: "Multiple ai",
  description: "Effortlessly generate articles, blog posts, website copy, scripts, and more—tailored to your needs with the power of AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={poppins.className}
      >
        <GlobalProvider>

        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            >

        {children}
          </ThemeProvider>
            </GlobalProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
