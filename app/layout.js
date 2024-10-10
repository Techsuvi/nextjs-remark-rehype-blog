import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Techsuvi - A Tech Lover",
  description: "Created By Techsuvi and Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar/>
        {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
