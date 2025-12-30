import { cn } from "@/lib/utils";


export function HorizontalGap({ className }: { className?: string }) {
    return (
        <div className={cn(
            'layout-width h-4 border border-[#1c1c1e] ',
            className
        )}></div>
    );
}

export function VerticalGap({ className }: { className?: string }) {
    return (
        <div className={cn(
            'w-4 self-stretch border border-[#1c1c1e]',
            className
        )}></div>
    );
}