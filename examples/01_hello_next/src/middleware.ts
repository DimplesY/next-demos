import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {

  // console.log(request)

  return NextResponse.next()
}

// 配置中间件对哪些路由生效
export const config = {
  matcher: '/',
}
