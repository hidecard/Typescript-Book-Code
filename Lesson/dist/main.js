"use strict";
// Name input and output element references
var nameInput = document.getElementById('nameInput');
var output = document.getElementById('output');
// Function to greet user
function greetUser() {
    var name = nameInput.value.trim();
    if (name === '') {
        output.classList.remove('d-none', 'alert-success');
        output.classList.add('alert-danger');
        output.innerText = 'Please enter your name.';
        return;
    }
    // Save to localStorage
    localStorage.setItem('username', name);
    output.classList.remove('d-none', 'alert-danger');
    output.classList.add('alert-success');
    output.innerText = "Hello ".concat(name);
}
// Function to load saved name
function loadName() {
    var savedName = localStorage.getItem('username');
    if (savedName) {
        nameInput.value = savedName;
        output.classList.remove('d-none', 'alert-danger');
        output.classList.add('alert-success');
        output.innerText = " Welcome back, ".concat(savedName);
    }
}
// Dark mode toggle
function toggleTheme() {
    var html = document.documentElement;
    var currentTheme = html.getAttribute('data-theme');
    html.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
}
// Run on load
loadName();
// Expose to HTML
window.greetUser = greetUser;
window.toggleTheme = toggleTheme;
