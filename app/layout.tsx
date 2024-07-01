import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gabrielle | Personal Portfolio',
  description: 'Welcome to Gabrielle\'s personal portfolio. Explore my projects, skills, and professional journey in web development and design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 h-[5000px]`}>
        <div className="bg-[#fcd4ea] absolute top-[-6rem] -z-10 right-[-10rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] xl:w-[80rem] 2xl:w-[97rem]"></div>
        <div className="bg-[#c8d4ff] absolute top-[-10rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] xl:w-[80rem] 2xl:w-[97rem] md:left-[-40rem] lg:left-[-33rem] xl:left-[-30rem] 2xl:left-[-20rem]"></div>
        
        <Header/>
        {children}
      </body>
    </html>
  )
}
