import '../globals.css'
import { Prompt } from 'next/font/google'
import ToasterContext from '../context/ToasterContext'
import AuthContext from '../context/AuthContext'

const inter = Prompt({ subsets: ['latin'], weight: ['600', '700'] })


export const metadata = {
  title: 'PharmAdvice - Регистрация',
  description: 'Регистрация в систему',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
        </body>
    </html>
  )
}
