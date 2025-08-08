import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import '@/styles/globals.css'
import { montserrat } from "./ui/fonts"

export const metadata = {
  title: 'Luzem Fotografía',
  description: 'Fotografía Madrid',
  icons: { icon: '/favicon.ico', },
}
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>

  )
}
