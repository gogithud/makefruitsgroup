document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;
  
    modeToggle.addEventListener('change', function() {
      if (modeToggle.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
      }
    });
  });
  