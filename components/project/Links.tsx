import ToolTipComponent from "../ui/TooltipComponent";

export default function Links({ live, repo, x, isPrivate }: { live?: string, repo: string, x?: string, isPrivate: boolean }) {

    return (
        <div className="text-xs text-neutral-500 flex gap-x-2">
            {live && (
                <a
                    target="_blank"
                    href={live}
                    className="cursor-pointer hover:underline transition"
                >
                    LIVE
                </a>
            )}
            <ToolTipComponent content={isPrivate ? `it's currently private` : `it's open sourced`}>
                <a
                    target="_blank"
                    href={repo}
                    className="cursor-pointer hover:underline transition"
                >
                    GITHUB
                </a>
            </ToolTipComponent>
            {x && (
                <a
                    target="_blank"
                    href={x}
                    className="cursor-pointer hover:underline transition"
                >
                    X
                </a>
            )}
        </div>
    );
}