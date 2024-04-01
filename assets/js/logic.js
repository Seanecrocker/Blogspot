//Data Transfer//
const postedInput1 = document.getElementById('posted1');
const postedInput2 = document.getElementById('posted2');
const postedInput3 = document.getElementById('posted3');
const postedInput4 = document.getElementById('posted4');
const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.querySelector('#submit');
const errorMessage = document.getElementById('error-message');

function saveUser() {
    const user = {
        
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    };

    localStorage.setItem('user', JSON.stringify(user));
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

     //Error Message Function//
    if (usernameInput.value === '' || titleInput.value === '' || contentInput.value === '') {
        errorMessage.textContent = 'Please fill out all required fields.';
        errorMessage.style.display = "inline";
    } else {
        errorMessage.textContent = '';
        saveUser();
        window.location.href = 'blog.html';
    }
});