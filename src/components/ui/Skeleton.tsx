export function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`bg-[#1E2330] rounded-[8px] animate-pulse ${className}`} />;
}

export function CardSkeleton() {
  return (
    <div className="bg-[#181C23] border border-[#2A2F38] rounded-[16px] p-6 space-y-4">
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
      <Skeleton className="h-10 w-32" />
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-14 w-full" />
      ))}
    </div>
  );
}
