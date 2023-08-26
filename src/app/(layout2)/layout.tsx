import "@/styles/vars.css"
import "@/styles/globals.css"
import "@/styles/transitions.css"

import { Header } from "@/components/Header"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Container queries",
  description: "Container queries with Next.js",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="view-transition" content="same-origin" key="view" />
        <meta name="description" content={metadata.description} />
        <meta name="og:title" content={metadata.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <div className="site">{children}</div>
      </body>
    </html>
  )
}
