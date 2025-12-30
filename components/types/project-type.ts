
export default interface ProjectType {
    title: string,
    year: string,
    description: string,
    images: string[],
    tech: string[],
    live?: string,
    repo: string,
    isPrivate: boolean,
    x?: string,
}