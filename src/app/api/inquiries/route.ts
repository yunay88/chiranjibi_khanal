
import { NextRequest, NextResponse } from 'next/server';
import { createInquiry } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const inquiry = await createInquiry({
      name: body.name || '',
      email: body.email || '',
      subject: body.subject || '',
      message: body.message || '',
      status: 'unread',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    });
    return NextResponse.json({ success: true, inquiry });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
