import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, context: { params: {id:string} }) {
  return NextResponse.json({ code: 200, msg: context.params.id })
}



export async function PUT(request:NextRequest) {
  return NextResponse.json({code:200, msg:'put ok'})
}

export async function DELETE(request:NextRequest) {
  return NextResponse.json({code:200, msg:'delete ok'})
}
