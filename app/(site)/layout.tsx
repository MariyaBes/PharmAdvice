import '../globals.css'
import { Prompt } from 'next/font/google'
import Navbar from './components/navbar/Navbar'

const inter = Prompt({ subsets: ['latin'], weight: ['600', '700'] })

export const metadata = {
  title: 'PharmAdvice - главная страница',
  description: 'Сервис для онлайн-консультаций с фармацевтом',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        
        </body>
    </html>
  )
}
