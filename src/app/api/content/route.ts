/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'src/data', 'live-content.json');

function readContent(): Record<string, any> {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
  } catch {}
  return {};
}

function writeContent(data: Record<string, any>) {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

export async function GET() {
  const content = readContent();
  return NextResponse.json(content);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const existing = readContent();
    const merged = { ...existing, ...body };
    writeContent(merged);
    return NextResponse.json({ success: true, message: 'Content saved' });
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Failed to save content' }, { status: 500 });
  }
}
