const username = document.querySelector("#username");
const title = document.querySelector("title");
const content = document.querySelector("content");
const submit = document.querySelector("submit")

renderLastRegistered()

document.querySelector("submit").addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const actionUrl = this.getAttribute('action');
    
    window.location.href = actionUrl;
  });
  const addButton = document. querySelector ("#blogpage") ;

  

  localStorage.setItem("username", username);
  localStorage.setItem("title", title);
  localStorage.setItem("content", content);