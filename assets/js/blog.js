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



  const showBlog = JSON.parse(localStorage.getItem('user'));
 
  if (showBlog !== null) {
      document.getElementById('display-title').textContent = showBlog.title;
      document.getElementById('display-content').textContent = showBlog.content;
      document.getElementById('posted1').textContent = showBlog.username;
      document.getElementById('posted2').textContent = showBlog.username;
      document.getElementById('posted3').textContent = showBlog.username;
      document.getElementById('posted4').textContent = showBlog.username;
  }





  
  

