import { useState, useEffect } from 'react';
import projectService from '../services/projectService';
import type { Project } from '../services/projectService';

interface UseProjectsReturn {
    projects: Project[];
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

export const useProjects = (): UseProjectsReturn => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const projectsData = await projectService.getProjects();
            setProjects(projectsData);
        } catch (err: any) {
            setError(err.message || 'Error loading projects');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return {
        projects,
        loading,
        error,
        refetch: fetchProjects,
    };
}; 