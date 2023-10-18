import { NextRequest, NextResponse } from 'next/server'

const userList = [
  {
    id: 1,
    username: '小明',
  },
  {
    id: 2,
    username: '小红',
  },
]

export async function GET(request: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params
  const user = userList.find((item) => item.id === Number(id))
  if (!user) {
    return NextResponse.json({ code: 404, msg: 'user not found' })
  }
  return NextResponse.json(
    { code: 200, msg: 'success', data: user },
    { headers: { 'Set-Cookie': 'key=value; Domain=localhost; Path=/; HttpOnly; SameSite=lax; Secure;' } }
  )
}

export async function PUT(request: NextRequest) {
  return NextResponse.json({ code: 200, msg: 'put ok' })
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json({ code: 200, msg: 'delete ok' })
}
