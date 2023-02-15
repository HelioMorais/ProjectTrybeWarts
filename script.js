const btnForm = document.getElementById('acesso');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnForm.addEventListener('click', login);
