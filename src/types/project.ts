export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    features: string[];
    liveUrl?: string;
    githubUrl?: string;
    imageUrl?: string;
    hasPreview: boolean;
    visible: boolean;
}
