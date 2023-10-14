import '@/app/globals.css'
import Link from 'next/link'

const tabsList = ['首页', '番剧', '直播', '游戏中心', '会员购']

export default async function Index() {
  const NavList = tabsList.map((tab, index) => (
    <li className="ml-[25px]" key={index}>
      <Link href={'/'}>{tab}</Link>
    </li>
  ))

  return (
    <div className="mx-auto w-full px-[24px] max-w-[2560px] min-w-[1100px] h-[64px] shadow-header flex items-center justify-between">
      <div>
        <ul className="flex">{NavList}</ul>
      </div>
    </div>
  )
}
