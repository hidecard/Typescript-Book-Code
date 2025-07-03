function greetUser(): void {
  const nameInput = document.getElementById('nameInput') as HTMLInputElement;
  const output = document.getElementById('output') as HTMLElement;

  const name = nameInput.value.trim();
  if (name === '') {
    output.classList.remove('d-none', 'alert-success');
    output.classList.add('alert-danger');
    output.innerText = 'Please enter your name.';
    return;
  }

  output.classList.remove('d-none', 'alert-danger');
  output.classList.add('alert-success');
  output.innerText = `Hello ${name}`;
}

function toggleTheme(): void {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  html.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
}

// Expose functions to HTML
(window as any).greetUser = greetUser;
(window as any).toggleTheme = toggleTheme;
