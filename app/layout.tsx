import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
// import { Fredoka } from 'next/font/google'

// const inter = Fredoka({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` px-[4.7rem] lg:px-[6rem] xl:px-[9rem]`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
