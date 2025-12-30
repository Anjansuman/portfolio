import { cn } from "@/lib/utils";
import { projects } from "../data/projects";
import ProjectType from "../types/project-type";

export default function Projects({ className }: { className?: string }) {
    return (
        <div className={cn(
            "w-full",
            className
        )}
        >
            <div className="mb-2">
                <div className="font-semibold text-neutral-200">
                    projects
                </div>
                <div className="text-xs text-neutral-400">I built</div>
            </div>
            <div className="flex flex-col gap-y-2 ">
                {projects.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: ProjectType }) {

    function truncate(str: string) {
        if (str.length > 20) return str.substring(0, 60) + '...';
        else str;
    }

    return (
        <div className="w-full bg-[#17171A] flex flex-col gap-y-2 text-sm text-neutral-500 px-4 py-3 rounded-md cursor-pointer ">
            <div className="flex justify-between items-center">
                <div className="text-sm text-neutral-300">
                    {project.title}
                </div>
                <div className="text-neutral-600 text-xs italic">
                    {project.year}
                </div>
            </div>
            <div className="text-xs">
                {truncate(project.description)}
            </div>
        </div>
    );
}