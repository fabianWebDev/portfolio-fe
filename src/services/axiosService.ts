import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Extend AxiosRequestConfig to include metadata
interface ExtendedAxiosRequestConfig extends AxiosRequestConfig {
  metadata?: {
    startTime: Date;
  };
}

// Types for better type safety
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
  status: number;
}

export interface ApiError {
  message: string;
  status: number;
  code?: string;
  details?: any;
}

// Configuration interface
interface ApiConfig {
  baseURL: string;
  timeout: number;
  headers?: Record<string, string>;
}

// Default configuration
const defaultConfig: ApiConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

class ApiService {
  private instance: AxiosInstance;
  private config: ApiConfig;

  constructor(config: Partial<ApiConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
    this.instance = axios.create(this.config);
    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.instance.interceptors.request.use(
      (config: any) => {
        // Add authentication token if available
        const token = this.getAuthToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        // Add request timestamp for debugging
        (config as ExtendedAxiosRequestConfig).metadata = { startTime: new Date() };

        console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
        return config;
      },
      (error: any) => {
        console.error('❌ Request Error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        const endTime = new Date();
        const startTime = (response.config as ExtendedAxiosRequestConfig).metadata?.startTime;
        const duration = startTime ? endTime.getTime() - startTime.getTime() : 0;

        console.log(`✅ API Response: ${response.status} ${response.config.url} (${duration}ms)`);
        
        return response;
      },
      (error: AxiosError) => {
        const endTime = new Date();
        const startTime = (error.config as ExtendedAxiosRequestConfig)?.metadata?.startTime;
        const duration = startTime ? endTime.getTime() - startTime.getTime() : 0;

        console.error(`❌ API Error: ${error.response?.status} ${error.config?.url} (${duration}ms)`, error);

        return this.handleError(error);
      }
    );
  }

  private handleError(error: AxiosError): Promise<never> {
    let apiError: ApiError;

    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      apiError = {
        message: (data as any)?.message || error.message || 'Server error',
        status,
        code: (data as any)?.code,
        details: data,
      };

      // Handle specific status codes
      switch (status) {
        case 401:
          this.handleUnauthorized();
          break;
        case 403:
          this.handleForbidden();
          break;
        case 404:
          apiError.message = 'Resource not found';
          break;
        case 500:
          apiError.message = 'Internal server error';
          break;
      }
    } else if (error.request) {
      // Network error
      apiError = {
        message: 'Network error - no response received',
        status: 0,
        code: 'NETWORK_ERROR',
      };
    } else {
      // Other error
      apiError = {
        message: error.message || 'Unknown error occurred',
        status: 0,
        code: 'UNKNOWN_ERROR',
      };
    }

    return Promise.reject(apiError);
  }

  private getAuthToken(): string | null {
    // Get token from localStorage, sessionStorage, or wherever you store it
    return localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
  }

  private handleUnauthorized(): void {
    // Clear auth token and redirect to login
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken');
    
    // You can add navigation logic here
    // window.location.href = '/login';
    console.warn('🔐 Unauthorized - token cleared');
  }

  private handleForbidden(): void {
    console.warn('🚫 Forbidden - insufficient permissions');
  }

  // Generic HTTP methods
  async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.instance.get<ApiResponse<T>>(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.instance.post<ApiResponse<T>>(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.instance.put<ApiResponse<T>>(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.instance.patch<ApiResponse<T>>(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.instance.delete<ApiResponse<T>>(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Utility methods
  setAuthToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  removeAuthToken(): void {
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken');
  }

  updateConfig(config: Partial<ApiConfig>): void {
    this.config = { ...this.config, ...config };
    this.instance.defaults.baseURL = this.config.baseURL;
    this.instance.defaults.timeout = this.config.timeout;
    
    if (this.config.headers) {
      Object.assign(this.instance.defaults.headers, this.config.headers);
    }
  }

  // Get the axios instance for advanced usage
  getInstance(): AxiosInstance {
    return this.instance;
  }
}

// Create and export a default instance
const apiService = new ApiService();

// Export the class for custom instances
export { ApiService };

// Export the default instance
export default apiService;
