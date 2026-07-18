/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      return NextResponse.json({ images: [] });
    }

    const files = fs.readdirSync(uploadsDir)
      .filter((f) => /\.(jpg|jpeg|png|webp|gif|avif)$/i.test(f))
      .map((f) => `/uploads/${f}`)
      .reverse();

    return NextResponse.json({ images: files });
  } catch (err) {
    return NextResponse.json({ images: [] });
  }
}
