import { cn } from "@/lib/utils";

type ResponsiveDataTableProps = {
  headers: readonly string[];
  rows: readonly (readonly string[])[];
  className?: string;
  minWidth?: string;
};

export function ResponsiveDataTable({
  headers,
  rows,
  className,
  minWidth = "640px",
}: ResponsiveDataTableProps) {
  const valueHeaders = headers.slice(1);

  return (
    <div className={className}>
      <div className="space-y-3 md:hidden">
        {rows.map((row, rowIndex) => (
          <article key={rowIndex} className="glass-panel p-4">
            <p className="text-sm font-semibold leading-snug text-navy">{row[0]}</p>
            {valueHeaders.length > 0 ? (
              <dl className="mt-3 space-y-3 border-t border-border-subtle pt-3">
                {valueHeaders.map((header, headerIndex) => (
                  <div key={header}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
                      {header}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {row[headerIndex + 1]}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </article>
        ))}
      </div>

      <div className="hidden overflow-x-auto glass-panel md:block">
        <table className="w-full text-left text-sm" style={{ minWidth }}>
          <thead>
            <tr className="border-b border-border-subtle">
              {headers.map((header) => (
                <th key={header} className="px-4 py-3 font-semibold text-navy">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-border-subtle last:border-0">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={cn(
                      "px-4 py-3 text-muted-foreground",
                      cellIndex === 0 && "font-medium text-charcoal",
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
