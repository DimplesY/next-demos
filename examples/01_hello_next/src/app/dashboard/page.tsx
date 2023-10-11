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

export default async function Dashboard() {
  const user = await fetch('http://localhost:3000/user/api/1').then((res) => res.json())

  return <div>The Dashboard Page - {user.msg}</div>
}
