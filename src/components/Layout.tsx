import Footer from "./Footer"
import Navbar from "./Navbar"

export const metadata = {
  title: 'Luzem Fotografía',
  description: 'Fotografía Madrid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}
