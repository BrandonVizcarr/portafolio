import { useState, useEffect } from 'react';

interface GithubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    topics: string[];
    language: string | null;
    stargazers_count: number;
    fork: boolean;
}

export interface Project {
    title: string;
    description: string;
    githubUrl: string;
    demoUrl?: string;
    tags: string[];
    stars: number;
}

export function useGithubProjects(username: string) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }

                const data: GithubRepo[] = await response.json();

                // Filter out forks and map to Project interface
                const formattedProjects: Project[] = data
                    .filter(repo => !repo.fork) // Optional: filter out forked repos
                    .map(repo => {
                        const tags = repo.topics || [];
                        if (repo.language && !tags.includes(repo.language)) {
                            tags.push(repo.language);
                        }

                        return {
                            title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '), // Format title
                            description: repo.description || 'No description available',
                            githubUrl: repo.html_url,
                            demoUrl: repo.homepage || undefined,
                            tags: tags.slice(0, 5), // Limit tags
                            stars: repo.stargazers_count
                        };
                    });

                setProjects(formattedProjects);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            fetchProjects();
        }
    }, [username]);

    return { projects, loading, error };
}
