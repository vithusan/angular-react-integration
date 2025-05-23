let isAngularLoaded = false;

export const initializeAngular = async () => {
  if (isAngularLoaded) return;
  
  try {
    await import('../angular-files/polyfills.js');
    await import('../angular-files/main.js');
    await customElements.whenDefined('angular-input');
    isAngularLoaded = true;
    console.log('Angular components loaded successfully');
  } catch (error) {
    console.error('Failed to load Angular components:', error);
    throw error;
  }
};