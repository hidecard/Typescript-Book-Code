"use strict";
function greetUser() {
    var nameInput = document.getElementById('nameInput');
    var output = document.getElementById('output');
    var name = nameInput.value.trim();
    if (name === '') {
        output.classList.remove('d-none', 'alert-success');
        output.classList.add('alert-danger');
        output.innerText = 'Please enter your name.';
        return;
    }
    output.classList.remove('d-none', 'alert-danger');
    output.classList.add('alert-success');
    output.innerText = "Hello ".concat(name);
}
function toggleTheme() {
    var html = document.documentElement;
    var currentTheme = html.getAttribute('data-theme');
    html.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
}
// Expose functions to HTML
window.greetUser = greetUser;
window.toggleTheme = toggleTheme;
