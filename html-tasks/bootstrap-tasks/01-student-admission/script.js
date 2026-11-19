// Bootstrap validation: show messages and block submit if the form is invalid.
const form = document.querySelector('.needs-validation');
form.addEventListener('submit', e => {
  e.preventDefault();
  if (form.checkValidity()) {
    document.getElementById('ok').classList.remove('d-none');
    form.classList.remove('was-validated');
    form.reset();
  } else {
    form.classList.add('was-validated');
  }
});
