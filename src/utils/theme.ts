// Set the theme based on the provided value
export function setTheme(theme: 'light' | 'dark') {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
}

// Get the currently stored theme from localStorage
export function getStoredTheme() {
  return localStorage.getItem('theme') as 'light' | 'dark' | null;
}

// Get the system's default theme (based on prefers-color-scheme)
export function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

// Automatically set the theme on page load
window.addEventListener('DOMContentLoaded', () => {
  // Check for a stored theme
  const storedTheme = getStoredTheme();
  
  if (storedTheme) {
    // If a stored theme exists, apply it
    setTheme(storedTheme);
  } else {
    // If no stored theme, apply the system's theme
    setTheme(getSystemTheme());
  }
});
