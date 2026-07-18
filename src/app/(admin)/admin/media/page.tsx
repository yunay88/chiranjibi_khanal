'use client';

import { useState, useRef, useEffect } from 'react';
import { Upload, Copy, Check, ImageIcon } from 'lucide-react';

export default function MediaPage() {
  const [images, setImages] = useState<string[]>([]);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  // Load existing images from server on mount
  useEffect(() => {
    fetch('/api/uploads')
      .then((r) => r.json())
      .then((data) => {
        if (data.images) setImages(data.images);
      })
      .catch(() => {});
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setUploading(true);

    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append('file', file);
      try {
        const res = await fetch('/api/upload', { method: 'POST', body: formData });
        const data = await res.json();
        if (data.success && data.url) {
          setImages((prev) => [data.url, ...prev]);
        }
      } catch (err) {
        console.error('Upload failed', err);
      }
    }

    setUploading(false);
    if (e.target) e.target.value = '';
  };

  const copyUrl = async (url: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(window.location.origin + url);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000);
    } catch {}
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Topbar */}
      <div className="admin-topbar">
        <div>
          <h1 className="admin-heading">Media Library</h1>
          <p className="admin-muted mt-0.5">
            {images.length > 0 ? `${images.length} image${images.length !== 1 ? 's' : ''} uploaded` : 'Upload images for your website'}
          </p>
        </div>
        <input ref={fileRef} type="file" accept="image/*" multiple onChange={handleUpload} className="hidden" />
        <button
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="admin-btn admin-btn-primary"
        >
          <Upload size={16} strokeWidth={1.5} /> {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto admin-scroll p-6 lg:p-8">
        {images.length === 0 ? (
          <div className="admin-card flex flex-col items-center justify-center py-24 text-center">
            <div className="admin-empty-icon">
              <ImageIcon size={22} strokeWidth={1.5} className="text-[var(--color-admin-text-muted)]" />
            </div>
            <p className="text-base font-semibold text-[var(--color-admin-text)] mb-1">No media uploaded</p>
            <p className="admin-muted mb-6">Click Upload to add images</p>
            <button onClick={() => fileRef.current?.click()} className="admin-btn admin-btn-primary">
              <Upload size={16} strokeWidth={1.5} /> Upload Images
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {images.map((url, i) => (
                <div key={i} className="group relative aspect-square bg-[var(--color-admin-sidebar)] border border-[var(--color-admin-border)] rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={url} alt={`Upload ${i + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <button
                      onClick={() => copyUrl(url, i)}
                      className="admin-btn admin-btn-secondary text-xs bg-white/90 text-gray-800 border-0 hover:bg-white"
                    >
                      {copiedIdx === i ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy URL</>}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 admin-card">
              <p className="text-xs text-[var(--color-admin-text-muted)]">
                Images are stored in <code className="text-[var(--color-admin-text-secondary)]">public/uploads/</code>. Copy the URL to use them in your content editor (hero poster, about images, etc.)
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
