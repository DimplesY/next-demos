import { sum } from '@/app/_lib'
import { Test } from '@/components/Test'
import { Metadata } from 'next'
import { Suspense } from 'react'

type Props = {
  searchParams: any
}

export async function generateMetadata({searchParams} : Props) :Promise<Metadata> {
  return {
    title: '测试函数生成 MetaData --- ' + searchParams.name
  }
}

export default async function Login() {
  return (
    <>
      用户名: <input type="text" name="username" />
      <br />
      密码: <input type="password" name="password" />
      <br />
      <button>提交</button>
    </>
  )
}
