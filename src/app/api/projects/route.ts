/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'src/data', 'projects.json');

function readProjects(): any[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
  } catch {}
  return [];
}

function writeProjects(projects: any[]) {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2), 'utf-8');
}

export async function GET() {
  return NextResponse.json(readProjects());
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const projects = readProjects();
    const newProject = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
    };
    projects.push(newProject);
    writeProjects(projects);
    return NextResponse.json({ success: true, project: newProject });
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Failed to create project' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, ...data } = body;
    const projects = readProjects();
    const index = projects.findIndex((p: any) => p.id === id);
    if (index === -1) {
      return NextResponse.json({ success: false, message: 'Project not found' }, { status: 404 });
    }
    projects[index] = { ...projects[index], ...data, updatedAt: new Date().toISOString() };
    writeProjects(projects);
    return NextResponse.json({ success: true, project: projects[index] });
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const projects = readProjects();
    const filtered = projects.filter((p: any) => p.id !== id);
    if (filtered.length === projects.length) {
      return NextResponse.json({ success: false, message: 'Project not found' }, { status: 404 });
    }
    writeProjects(filtered);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Failed to delete project' }, { status: 500 });
  }
}
