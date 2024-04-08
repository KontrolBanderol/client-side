import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
export default function ProfileSkeleton() {
  return (
    <div className="flex flex-row gap-3">
      <Skeleton className="w-[73px]" />
      <Skeleton className="w-[177px]" />
    </div>
  );
}
