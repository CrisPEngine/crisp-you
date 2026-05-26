import { cn } from "@/lib/utils";

type ActionChipProps = {
  label: "Auto-publish" | "Export";
  className?: string;
};

export function ActionChip({ label, className }: ActionChipProps) {
  return (
    <span
      className={cn(
        "action-chip",
        label === "Auto-publish" ? "action-chip-publish" : "action-chip-export",
        className,
      )}
    >
      {label}
    </span>
  );
}
