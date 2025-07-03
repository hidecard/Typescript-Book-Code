// Name input and output element references
const nameInput = document.getElementById('nameInput') as HTMLInputElement;
const output = document.getElementById('output') as HTMLElement;

// Function to greet user
function greetUser(): void {
  const name = nameInput.value.trim();

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
  output.innerText = `Hello ${name}`;
}

// Function to load saved name
function loadName(): void {
  const savedName = localStorage.getItem('username');
  if (savedName) {
    nameInput.value = savedName;
    output.classList.remove('d-none', 'alert-danger');
    output.classList.add('alert-success');
    output.innerText = ` Welcome back, ${savedName}`;
  }
}

// Dark mode toggle
function toggleTheme(): void {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  html.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
}

// Run on load
loadName();

// Expose to HTML
(window as any).greetUser = greetUser;
(window as any).toggleTheme = toggleTheme;
