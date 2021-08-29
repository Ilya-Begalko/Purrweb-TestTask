const form = document.querySelector('#form');

function setErrorState(array) {
  array.forEach(name => {
    const input = form.querySelector(`input[name="${name}"]`) || form.querySelector(`textarea[name="${name}"]`);
    input.classList.add('contact__input_error');
  });
}

function removeErrorState() {
  const inputs = form.querySelectorAll('.get-in-touch__input_error');
  inputs.forEach(input => {
    if (input) {
      input.classList.remove('contact__input_error');
    }
  });
}

function handleSubmit(event) {
  const data = new FormData(event.target);
  let emptyFilelds = [];

  event.preventDefault();
  removeErrorState();

  data.forEach((value, field) => {
    if (!value) {
      emptyFilelds.push(field);
    }
  });

  if (emptyFilelds.length === 0) {
    form.reset();
  } else {
    setErrorState(emptyFilelds);
  }
}

form.addEventListener('submit', handleSubmit);