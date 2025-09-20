import { cn } from "@/lib/utils";

interface PriceBadgeProps {
  price: string;
  period?: string;
  className?: string;
  popular?: boolean;
}

export const PriceBadge = ({ price, period = "/mês", className, popular = false }: PriceBadgeProps) => {
  return (
    <div className={cn(
      "inline-flex items-center gap-1 px-4 py-2 rounded-full font-bold",
      popular 
        ? "bg-gradient-to-r from-primary to-secondary text-white shadow-strong" 
        : "bg-muted text-foreground",
      className
    )}>
      <span className="text-2xl">{price}</span>
      <span className="text-sm opacity-80">{period}</span>
    </div>
  );
};