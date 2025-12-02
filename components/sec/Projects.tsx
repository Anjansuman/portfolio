
interface ProjectType {
    title: string,
    year: string,
    description: string,
}

const projects: ProjectType[] = [
    {
        title: 'winterfell',
        year: '2025',
        description: 'an anchor solana smart contract generator with features like building, testing, deploying seemlessly with the real-time logs.'
    },
    {
        title: 'nocturn',
        year: '2025',
        description: 'an real-time quiz platform with role based quiz access.',
    },
    {
        title: 'hashed',
        year: '2025',
        description: 'a light weight crypto wallet browser extension with all the features like sending, receiving, viewing, creating from a HD wallet, creating custom wallets.',
    },
    {
        title: 'incert',
        year: '2025',
        description: 'a certificate verification and creation platform which uses solana chain for certificates addresses and machine learning for data fetching and manipulation in the certificates.',
    },
    {
        title: 'minto',
        year: '2025',
        description: 'a NFT minting platform where an admin can create NFTs and the users can buy them.'
    },
    {
        title: 'portfolio',
        year: '2025',
        description: "the thing you're looking at."
    }
];

export default function Projects() {
    return (
        <div className="w-full">
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
        if(str.length > 20) return str.substring(0, 60) + '...';
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