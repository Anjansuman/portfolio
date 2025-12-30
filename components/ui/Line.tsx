import { cn } from "@/lib/utils";


export default function Line() {
    return (
        <div className={cn(
            "w-screen border-y border-[#1C1C1E] ",
            'flex justify-center items-center',
            'relative'
        )}>

                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(-45deg, 
                            rgba(54, 54, 54, 0.2) 0px, 
                            rgba(255, 0, 100, 0) 2px, 
                            transparent 2px, 
                            transparent 6px)
                        `,
                    }}
                />

            <div className="layout-width layout-side-border h-8 ">
            </div>
        </div>
    );
}