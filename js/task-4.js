const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerSubmit);

const formValue = {};

function handlerSubmit(event) {
  event.preventDefault();
  if (
    event.target.elements.email.value.trim().length === 0 ||
    event.target.elements.password.value.trim().length === 0
  ) {
    alert('All form fields must be filled in');
  } else {
    formValue.email = event.target.elements.email.value.trim();
    formValue.password = event.target.elements.password.value.trim();
    console.log(formValue);
    form.reset();
  }
}
