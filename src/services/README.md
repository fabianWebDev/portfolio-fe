# Servicio de Axios - Documentación

Este servicio proporciona una capa robusta y moderna para comunicarse con APIs REST usando Axios.

## Características

- ✅ **Interceptores automáticos** para requests y responses
- ✅ **Manejo automático de tokens de autenticación**
- ✅ **Logging detallado** con timestamps y duración de requests
- ✅ **Manejo centralizado de errores** con códigos de estado específicos
- ✅ **TypeScript completo** con tipos genéricos
- ✅ **Configuración flexible** para diferentes entornos
- ✅ **Métodos de utilidad** para gestión de tokens

## Instalación

El servicio ya está configurado en tu proyecto. Solo necesitas instalar axios:

```bash
npm install axios
```

## Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz de tu proyecto:

```env
VITE_API_BASE_URL=https://tu-api.com/api
```

### Configuración por Defecto

```typescript
const defaultConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};
```

## Uso Básico

### Importar el Servicio

```typescript
import apiService from './services/axiosService';
```

### Hacer Requests

```typescript
// GET request
const users = await apiService.get<User[]>('/users');

// POST request
const newUser = await apiService.post<User>('/users', {
  name: 'John Doe',
  email: 'john@example.com'
});

// PUT request
const updatedUser = await apiService.put<User>('/users/1', {
  name: 'Jane Doe'
});

// DELETE request
await apiService.delete('/users/1');
```

## Autenticación

### Configurar Token

```typescript
// Después del login
apiService.setAuthToken('tu-jwt-token');

// Remover token (logout)
apiService.removeAuthToken();
```

### El token se incluye automáticamente en todos los requests

```typescript
// No necesitas configurar el header Authorization manualmente
const profile = await apiService.get<User>('/auth/profile');
// El token se incluye automáticamente
```

## Manejo de Errores

### Estructura de Error

```typescript
interface ApiError {
  message: string;
  status: number;
  code?: string;
  details?: any;
}
```

### Ejemplo de Manejo de Errores

```typescript
try {
  const users = await apiService.get<User[]>('/users');
  console.log(users);
} catch (error) {
  if (error.status === 401) {
    // Redirigir al login
    window.location.href = '/login';
  } else if (error.status === 404) {
    console.error('Recurso no encontrado');
  } else {
    console.error('Error:', error.message);
  }
}
```

### Utilidad de Manejo de Errores

```typescript
import { handleApiError } from './services/apiExamples';

try {
  const data = await apiService.get('/some-endpoint');
} catch (error) {
  const userMessage = handleApiError(error);
  // Mostrar mensaje al usuario
  showNotification(userMessage);
}
```

## Servicios Específicos

### Usar Servicios Predefinidos

```typescript
import { useApiServices } from './services/apiExamples';

const { users, projects, auth } = useApiServices();

// Usar servicios
const allUsers = await users.getUsers();
const allProjects = await projects.getProjects();
const currentUser = await auth.getCurrentUser();
```

### Crear Servicio Personalizado

```typescript
import { ApiService } from './services/axiosService';

class MyCustomService {
  private api: ApiService;

  constructor() {
    this.api = new ApiService({
      baseURL: 'https://mi-api-personalizada.com/api',
      timeout: 15000,
    });
  }

  async getCustomData() {
    return await this.api.get('/custom-endpoint');
  }
}
```

## Logging y Debugging

El servicio incluye logging automático:

```
🚀 API Request: GET /users
✅ API Response: 200 /users (150ms)
❌ API Error: 404 /users/999 (45ms)
```

### Información Incluida en Logs

- Método HTTP y URL
- Código de estado de respuesta
- Duración del request
- Errores detallados

## Configuración Avanzada

### Actualizar Configuración en Tiempo de Ejecución

```typescript
apiService.updateConfig({
  baseURL: 'https://nueva-api.com/api',
  timeout: 20000,
  headers: {
    'X-Custom-Header': 'valor-personalizado'
  }
});
```

### Obtener Instancia de Axios

```typescript
const axiosInstance = apiService.getInstance();
// Usar métodos avanzados de axios si es necesario
```

## Mejores Prácticas

### 1. Usar Tipos TypeScript

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// Siempre especificar el tipo genérico
const users = await apiService.get<User[]>('/users');
```

### 2. Manejar Errores Específicos

```typescript
try {
  const data = await apiService.get('/endpoint');
} catch (error) {
  switch (error.status) {
    case 401:
      // Manejar no autorizado
      break;
    case 403:
      // Manejar prohibido
      break;
    case 500:
      // Manejar error del servidor
      break;
  }
}
```

### 3. Usar Servicios Organizados

```typescript
// ✅ Bueno - Servicios organizados
class UserService {
  async getUsers() {
    return await apiService.get<User[]>('/users');
  }
}

// ❌ Evitar - Requests directos en componentes
const Component = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    apiService.get('/users').then(setUsers); // Evitar esto
  }, []);
};
```

### 4. Configurar Variables de Entorno

```typescript
// ✅ Usar variables de entorno
baseURL: import.meta.env.VITE_API_BASE_URL

// ❌ Evitar URLs hardcodeadas
baseURL: 'https://mi-api.com/api'
```

## Ejemplos Completos

### Componente React con el Servicio

```typescript
import React, { useState, useEffect } from 'react';
import { useApiServices } from './services/apiExamples';
import { handleApiError } from './services/apiExamples';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const { users: userService } = useApiServices();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await userService.getUsers();
        setUsers(data);
      } catch (err) {
        setError(handleApiError(err));
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
```

### Hook Personalizado

```typescript
import { useState, useEffect } from 'react';
import apiService from './services/axiosService';

export const useApi = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiService.get<T>(url);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
```

## Troubleshooting

### Error: "Cannot find module 'axios'"

```bash
npm install axios
```

### Error: "Network error - no response received"

- Verificar que la API esté funcionando
- Verificar la URL base en la configuración
- Verificar la conectividad de red

### Error: "Unauthorized - token cleared"

- El token ha expirado o es inválido
- El servicio automáticamente limpia el token
- Redirigir al usuario al login

### Error: "Forbidden - insufficient permissions"

- El usuario no tiene permisos para el recurso
- Verificar roles y permisos en el backend

## Contribuir

Para agregar nuevas funcionalidades al servicio:

1. Mantener la compatibilidad con TypeScript
2. Agregar tests para nuevas funcionalidades
3. Documentar cambios en este README
4. Seguir las mejores prácticas establecidas 