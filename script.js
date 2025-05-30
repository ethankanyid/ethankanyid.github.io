<script>
  const toggleButton = document.getElementById('darkModeToggle');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      toggleButton.textContent = '☀️'; // Sun icon for dark mode active
    } else {
      toggleButton.textContent = '🌙'; // Moon icon for light mode active
    }
  });

  // Set initial icon
  toggleButton.textContent = '🌙';
</script>
