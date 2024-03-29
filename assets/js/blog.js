  document.getElementById("back-button").addEventListener("click", function() {
    window.history.back();
  });

  const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun');
const moonIcon = document.getElementById('moon');
const darkTheme = document.getElementsByClassName('dark-theme')

sunIcon.addEventListener('click', () => {
  document.body.classList.add('dark-theme');
  sunIcon.style.display = 'none'; 
  moonIcon.style.display = 'inline'; 
});

moonIcon.addEventListener('click', () => {
  document.body.classList.remove('dark-theme');
  moonIcon.style.display = 'none'; 
  sunIcon.style.display = 'inline'; 
});

