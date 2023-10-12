import { Metadata } from 'next'

function sleep(data: any): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000)
  })
}

export const metadata: Metadata = {
  title: "DimplesY's Next.js Demo",
  description: '',
}

export async function generateStaticParams() {
  console.log("静态打包时候会调用这个函数")
  return {}
}

export default async function Dashboard() {
  const user = await fetch('http://localhost:3000/user/api/1').then((res) => res.json())

  return <div>The Dashboard Page - {user.msg}</div>
}
