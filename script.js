const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

// Set initial icon and mode based on system preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.classList.add('dark-mode');
  toggleButton.textContent = '☀️';
} else {
  toggleButton.textContent = '🌙';
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️';
  } else {
    toggleButton.textContent = '🌙';
  }
});
