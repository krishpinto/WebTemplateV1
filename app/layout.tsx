import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { StickyNavbar } from "@/components/sticky-navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dashboard App",
  description: "A modern dashboard application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StickyNavbar />
        {children}
      </body>
    </html>
  )
}

