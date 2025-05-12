import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Federico | Personal Portfolio",
  description: "Federico is a React / Next developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[20rem] w-[20rem] rounded-full blur-[8rem] sm:h-[31.25rem] sm:w-[31.25rem] sm:blur-[10rem] lg:h-[40rem] lg:w-[40rem] lg:blur-[12rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-20rem] h-[20rem] w-[30rem] rounded-full blur-[8rem] sm:h-[31.25rem] sm:w-[50rem] sm:blur-[10rem] lg:h-[40rem] lg:w-[60rem] lg:blur-[12rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <>
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" />
              <ThemeSwitch />
            </>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
