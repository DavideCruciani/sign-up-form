const submitButton = document.querySelector('button')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const missMatch = document.querySelector('#miss')

submitButton.addEventListener('click', () => {
  if (password.value !== confirmPassword.value) {
    missMatch.innerHTML = "Passwords do not match"
  }
  if (password.value === confirmPassword.value) {
    missMatch.innerHTML = "";
  }
})
