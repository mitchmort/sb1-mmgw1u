import Alpine from 'alpinejs';

// Declare Alpine on window
declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}

// Initialize Alpine
window.Alpine = Alpine;
Alpine.start();