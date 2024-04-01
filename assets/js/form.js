  /* Theme Toggle */
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

  /* Data Transfer */
  const postedInput1 = document.getElementById('posted1')
  const postedInput2 = document.getElementById('posted2')
  const postedInput3 = document.getElementById('posted3')
  const postedInput4 = document.getElementById('posted4')
  const usernameInput = document.getElementById('username')
  const titleInput = document.getElementById('title')
  const contentInput = document.getElementById('content') 
  const submitButton = document.querySelector('#submit')

function saveUser() {
    const user = {
        posted1: postedInput1,
        posted2: postedInput2,
        posted3: postedInput3,
        posted4: postedInput4,
        
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    };

    localStorage.setItem('user', JSON.stringify(user));
}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  saveUser();
  window.location.href = 'blog.html'
})

////////////// sdsf 

  

  
  
