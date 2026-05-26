import { cn } from "@/lib/utils";

export type ContentStatus = "Approved" | "Review" | "Scheduled" | "Draft";

const statusClass: Record<ContentStatus, string> = {
  Approved: "status-chip-approved",
  Review: "status-chip-review",
  Scheduled: "status-chip-scheduled",
  Draft: "status-chip-draft",
};

type StatusChipProps = {
  label: ContentStatus;
  className?: string;
};

export function StatusChip({ label, className }: StatusChipProps) {
  return (
    <span className={cn("status-chip", statusClass[label], className)}>
      <span className="status-chip-dot" aria-hidden="true" />
      {label}
    </span>
  );
}
