import { cn } from "@/lib/utils";


export default function Line({ neutralDensity }: { neutralDensity?: string }) {
    return (
        <div className={cn(
            "w-full border-t",
            neutralDensity ? `border-neutral-${neutralDensity}` : 'border-neutral-500',
        )}></div>
    );
}