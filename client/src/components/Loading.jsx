import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div className="space-y-4 p-8">
      <Skeleton className="h-10 w-48" />

      <div className="space-y-3">
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
      </div>
    </div>
  );
}

export default Loading;
