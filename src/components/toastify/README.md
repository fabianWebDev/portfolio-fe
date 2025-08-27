# Componente Toastify Reutilizable - Estilos Adaptados

Este componente proporciona un sistema de notificaciones toast completo y personalizable que **se integra perfectamente con el diseño de tu aplicación**.

## 🎨 **Características de Diseño**

- ✅ **Estilos Coherentes**: Usa las variables CSS de tu aplicación
- ✅ **Colores Integrados**: Utiliza `--primary-color`, `--accent-color`, etc.
- ✅ **Tipografía Consistente**: Fuente Poppins como el resto de la app
- ✅ **Efectos Visuales**: Backdrop blur, sombras y gradientes
- ✅ **Animaciones Suaves**: Transiciones con `cubic-bezier` personalizadas
- ✅ **Responsive**: Se adapta a todos los tamaños de pantalla

## 🎯 **Integración Visual**

### **Colores Principales**
- **Éxito**: Usa `--primary-color` (#347a7d) con gradiente
- **Error**: Rojo adaptado al esquema de colores
- **Advertencia**: Naranja con toque de `--accent-color`
- **Info**: Azul con acentos dorados

### **Efectos Especiales**
- **Borde Superior**: Línea brillante con gradiente `--accent-color` → `--primary-color`
- **Backdrop Blur**: Efecto de cristal esmerilado
- **Sombras**: Usa `--shadow-lg` de tu sistema de sombras
- **Hover**: Elevación sutil con `translateY(-2px)`

## 🚀 **Uso Básico**

### 1. **Importar en tu App principal**

```tsx
import Toastify from './components/toastify/Toastify';

function App() {
  return (
    <div>
      {/* Tu contenido */}
      <Toastify />
    </div>
  );
}
```

### 2. **Usar las funciones de notificación**

```tsx
import { showSuccess, showError, showWarning, showInfo } from './components/toastify/Toastify';

// Notificaciones con estilos integrados
showSuccess('¡Operación completada!');
showError('Ha ocurrido un error');
showWarning('Ten cuidado con esta acción');
showInfo('Nueva actualización disponible');
```

## 🎨 **Personalización de Estilos**

### **Opciones por Defecto (Adaptadas a tu App)**

```tsx
const defaultOptions = {
  position: 'top-right',        // Posición estándar
  autoClose: 5000,             // 5 segundos
  hideProgressBar: false,       // Barra de progreso visible
  closeOnClick: true,          // Cerrar al hacer clic
  pauseOnHover: true,          // Pausar al pasar el mouse
  draggable: true,             // Permitir arrastrar
};
```

### **Personalización Individual**

```tsx
showSuccess('Mensaje personalizado', {
  position: 'top-center',       // Posición personalizada
  autoClose: 10000,            // 10 segundos
  hideProgressBar: true         // Sin barra de progreso
});
```

## 🌟 **Efectos Visuales Especiales**

### **Notificaciones Persistentes**
```tsx
showInfo('Esta notificación no se cierra', {
  autoClose: false
});
// Se aplica automáticamente un borde izquierdo dorado
```

### **Notificaciones Importantes**
```tsx
showWarning('¡Atención importante!', {
  className: 'important'  // Efecto de pulso dorado
});
```

### **Posiciones Disponibles**
- `top-right` (por defecto)
- `top-center`
- `top-left`
- `bottom-right`
- `bottom-center`
- `bottom-left`

## 📱 **Responsive Design**

### **Desktop**
- Notificaciones de 64px de altura mínima
- Padding de `var(--spacing-md)`
- Botón de cerrar de 24x24px

### **Mobile**
- Notificaciones de 56px de altura mínima
- Padding de `var(--spacing-sm)`
- Botón de cerrar de 20x20px
- Ancho completo con márgenes

## 🎭 **Animaciones y Transiciones**

### **Entrada**
- Escala de 0.8 a 1.0
- Deslizamiento desde la derecha
- Transición suave con `cubic-bezier(0.34, 1.56, 0.64, 1)`

### **Salida**
- Escala de 1.0 a 0.8
- Deslizamiento hacia la derecha
- Misma curva de transición

### **Hover**
- Elevación de 2px
- Sombra aumentada
- Transición con `var(--transition-normal)`

## 🔧 **Variables CSS Utilizadas**

```css
/* Colores */
--primary-color: #347a7d
--primary-hover: #46a1a6
--accent-color: #ffd700
--text-primary: #ffffff
--text-secondary: #e0e0e0

/* Espaciado */
--spacing-sm: 0.5rem
--spacing-md: 1rem
--spacing-lg: 1.5rem
--spacing-xl: 2rem

/* Bordes */
--border-radius-md: 6px
--border-radius-lg: 8px

/* Transiciones */
--transition-fast: 0.2s ease
--transition-normal: 0.3s ease

/* Sombras */
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.2)

/* Z-index */
--z-tooltip: 1070
```

## 📋 **Ejemplos de Uso en tu App**

### **Formulario de Contacto**
```tsx
import { showSuccess, showError } from '../toastify/Toastify';

const handleSubmit = async () => {
  try {
    await submitForm(data);
    showSuccess('¡Mensaje enviado correctamente!');
  } catch (error) {
    showError('Error al enviar el mensaje');
  }
};
```

### **Operaciones CRUD**
```tsx
import { showSuccess, showError, showWarning } from '../toastify/Toastify';

const handleDelete = async () => {
  try {
    await deleteItem(id);
    showSuccess('Elemento eliminado');
  } catch (error) {
    if (error.code === 'PERMISSION_DENIED') {
      showWarning('No tienes permisos');
    } else {
      showError('Error al eliminar');
    }
  }
};
```

## 🎯 **Características Técnicas**

- **TypeScript**: Completamente tipado
- **CSS Modules**: Estilos encapsulados
- **Variables CSS**: Integración con tu sistema de diseño
- **Backdrop Filter**: Efectos modernos de cristal
- **Gradientes**: Colores adaptados a tu paleta
- **Animaciones**: Transiciones suaves y profesionales

## 🚨 **Solución de Problemas**

### **Las notificaciones no aparecen**
- Verifica que `<Toastify />` esté en tu App.tsx
- Confirma que `react-toastify` esté instalado

### **Estilos no se aplican**
- Asegúrate de que el archivo CSS esté importado
- Verifica que las variables CSS estén definidas

### **Errores de TypeScript**
- Confirma que las importaciones sean correctas
- Verifica que `react-toastify` tenga tipos instalados

## 🎉 **Resultado Final**

Con estos estilos, las notificaciones toast se verán como una extensión natural de tu aplicación, manteniendo la coherencia visual y proporcionando una experiencia de usuario profesional y elegante.
