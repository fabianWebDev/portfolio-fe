# Sistema de Diseño Unificado

Este documento describe el sistema de diseño unificado implementado en el proyecto, que proporciona consistencia visual y facilita el mantenimiento del código.

## Variables CSS Globales

### Paleta de Colores
- `--primary-color`: #347a7d (Azul principal)
- `--primary-hover`: #46a1a6 (Azul hover)
- `--accent-color`: #ffd700 (Dorado de acento)
- `--text-primary`: #ffffff (Texto principal)
- `--text-secondary`: #e0e0e0 (Texto secundario)

### Colores de Fondo
- `--bg-primary`: #1a1a2e (Fondo principal)
- `--bg-secondary`: #16213e (Fondo secundario)
- `--bg-tertiary`: #0f3460 (Fondo terciario)

### Espaciado
- `--spacing-xs`: 0.25rem (4px)
- `--spacing-sm`: 0.5rem (8px)
- `--spacing-md`: 1rem (16px)
- `--spacing-lg`: 1.5rem (24px)
- `--spacing-xl`: 2rem (32px)

### Bordes
- `--border-radius-sm`: 4px
- `--border-radius-md`: 6px
- `--border-radius-lg`: 8px

### Transiciones
- `--transition-fast`: 0.2s ease
- `--transition-normal`: 0.3s ease
- `--transition-slow`: 0.4s ease

### Z-Index
- `--z-dropdown`: 1000
- `--z-sticky`: 1020
- `--z-fixed`: 1030
- `--z-modal-backdrop`: 1040
- `--z-modal`: 1050

## Componentes

### Button
El componente Button tiene tres variantes:

#### Primary
```tsx
<Button variant="primary" onClick={handleClick}>
  Botón Principal
</Button>
```
- Fondo azul con borde
- Hover: azul más claro
- Transformación: se eleva ligeramente

#### Secondary
```tsx
<Button variant="secondary" onClick={handleClick}>
  Botón Secundario
</Button>
```
- Fondo transparente
- Hover: línea dorada inferior
- Transformación: se eleva ligeramente

#### Tertiary
```tsx
<Button variant="tertiary" onClick={handleClick}>
  Botón Terciario
</Button>
```
- Fondo transparente, padding reducido
- Hover: línea dorada inferior
- Transformación: se eleva ligeramente

### Navbar
El navbar utiliza los mismos estilos base que los botones para mantener consistencia:
- Misma paleta de colores
- Mismos efectos hover
- Mismas transiciones
- Responsive design integrado

## Clases de Utilidad

### Colores
- `.text-accent`: Color dorado de acento
- `.bg-primary`: Fondo azul principal
- `.bg-primary-hover`: Fondo azul hover

### Transiciones
- `.transition-normal`: Transición estándar (0.3s)
- `.transition-slow`: Transición lenta (0.4s)

### Sombras
- `.shadow-md`: Sombra media estándar

### Bordes
- `.rounded-md`: Border radius estándar (6px)

## Responsive Design

El sistema incluye breakpoints consistentes:
- **1200px**: Ajustes para pantallas grandes
- **768px**: Ajustes para tablets
- **480px**: Ajustes para móviles

## Mantenimiento

Para mantener la consistencia del sistema:

1. **Usar variables CSS**: Siempre usar las variables definidas en lugar de valores hardcodeados
2. **Seguir la escala de espaciado**: Usar solo los valores de spacing predefinidos
3. **Mantener la paleta de colores**: No introducir nuevos colores sin actualizar las variables
4. **Consistencia en transiciones**: Usar las duraciones predefinidas
5. **Z-index escalado**: Seguir la escala de z-index para capas

## Ejemplos de Uso

### Crear un nuevo botón personalizado
```css
.customButton {
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--primary-color);
  color: var(--text-primary);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-normal);
}

.customButton:hover {
  background-color: var(--primary-hover);
  transform: translateY(-1px);
}
```

### Agregar un nuevo color
```css
:root {
  --new-color: #your-color;
}
```

Luego usar en los componentes:
```css
.newElement {
  color: var(--new-color);
}
```
