import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import type { ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toastify.module.css';

// Tipos de notificación disponibles
export type ToastType = 'success' | 'error' | 'warning' | 'info';

// Interfaz para las opciones personalizadas
export interface CustomToastOptions extends ToastOptions {
  autoClose?: number;
  position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
}

// Configuración por defecto
const defaultOptions: CustomToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

// Función para mostrar notificaciones de éxito
export const showSuccess = (message: string, options?: CustomToastOptions) => {
  toast.success(message, { ...defaultOptions, ...options });
};

// Función para mostrar notificaciones de error
export const showError = (message: string, options?: CustomToastOptions) => {
  toast.error(message, { ...defaultOptions, ...options });
};

// Función para mostrar notificaciones de advertencia
export const showWarning = (message: string, options?: CustomToastOptions) => {
  toast.warning(message, { ...defaultOptions, ...options });
};

// Función para mostrar notificaciones informativas
export const showInfo = (message: string, options?: CustomToastOptions) => {
  toast.info(message, { ...defaultOptions, ...options });
};

// Función para mostrar notificaciones personalizadas
export const showToast = (type: ToastType, message: string, options?: CustomToastOptions) => {
  const toastOptions = { ...defaultOptions, ...options };
  
  switch (type) {
    case 'success':
      toast.success(message, toastOptions);
      break;
    case 'error':
      toast.error(message, toastOptions);
      break;
    case 'warning':
      toast.warning(message, toastOptions);
      break;
    case 'info':
      toast.info(message, toastOptions);
      break;
    default:
      toast(message, toastOptions);
  }
};

// Función para cerrar todas las notificaciones
export const closeAllToasts = () => {
  toast.dismiss();
};

// Función para cerrar una notificación específica
export const closeToast = (toastId: string | number) => {
  toast.dismiss(toastId);
};

// Componente principal del contenedor de notificaciones
const Toastify: React.FC<CustomToastOptions> = (props) => {
  const {
    position = 'top-right',
    autoClose = 5000,
    hideProgressBar = false,
    closeOnClick = true,
    pauseOnHover = true,
    draggable = true,
    ...restProps
  } = props;

  return (
    <ToastContainer
      position={position}
      autoClose={autoClose}
      hideProgressBar={hideProgressBar}
      closeOnClick={closeOnClick}
      pauseOnHover={pauseOnHover}
      draggable={draggable}
      {...restProps}
    />
  );
};

export default Toastify;
