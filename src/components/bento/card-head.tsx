import type { LucideIcon } from "lucide-react";

export function CardHead({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text?: string }) {
  return (
    <div>
      <h3 className="flex items-center gap-2 font-medium">
        <Icon className="size-4 text-violet-600" aria-hidden />
        {title}
      </h3>
      {text && <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}
