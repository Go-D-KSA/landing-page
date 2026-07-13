import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-[28px] border border-white/10 bg-white/[.06] shadow-glass", className)} {...props} />
));
Card.displayName = "Card";

export { Card };
