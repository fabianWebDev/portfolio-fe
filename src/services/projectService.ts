import apiService from './axiosService';

// Define la interfaz para los proyectos
export interface Project {
    id: number;
    name: string;
    image: string | null;
    short_description: string;
    tech_list: string[];
    link: string;
    github_url: string;
    is_active: boolean;
    created_at: string;
}

class ProjectService {
    // Obtener todos los proyectos
    async getProjects(): Promise<Project[]> {
        try {
            const response = await apiService.get<Project[]>('/projects');
            return response.data;
        } catch (error) {
            console.error('Error al obtener proyectos:', error);
            throw error;
        }
    }

    // Obtener un proyecto por ID
    async getProjectById(id: number): Promise<Project> {
        try {
            const response = await apiService.get<Project>(`/projects/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error al obtener proyecto ${id}:`, error);
            throw error;
        }
    }
}

// Crear y exportar una instancia del servicio
const projectService = new ProjectService();

export default projectService; 