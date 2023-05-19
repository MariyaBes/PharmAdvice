import '../globals.css'
import { Prompt } from 'next/font/google'

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
