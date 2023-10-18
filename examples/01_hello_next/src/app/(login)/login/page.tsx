import { Metadata } from 'next'
import Image from 'next/image'
import imageSrc from './1.png'

type Props = {
  searchParams: any
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  return {
    title: '测试函数生成 MetaData --- ' + searchParams.name,
  }
}

export default async function Login() {
   async function onLogin(formData: FormData) {
    'use server'
    const username = formData.get('username')
    const password = formData.get('password')

    console.log(username)
    console.log(password)
  }

  return (
    <form action={onLogin}>
      用户名: <input type="text" name="username" />
      <br />
      密码: <input type="password" name="password" />
      <br />
      <button>提交</button>

      <Image src={imageSrc} alt='头像' />
    </form>
  )
}
