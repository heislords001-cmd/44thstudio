export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-9 w-9 animate-spin rounded-full border-2 border-border border-t-accent" />
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          Loading
        </p>
      </div>
    </div>
  );
}
