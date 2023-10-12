import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '登录页',
  description: '',
}


export default async function LoginRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <h1>登录页布局</h1>
        {children}
      </body>
    </html>
  )
}
