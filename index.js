const mainForm = document.forms.main;
const input = mainForm.inputName;
const text= document.querySelector('.form-popup-text')
mainForm.addEventListener('submit', function (event) {
    text.innerHTML = input.value;
    event.preventDefault()
})

text.addEventListener('copy', function (event) {
    event.clipboardData.setData('text/plain', 'test ' + text.innerHTML);
    event.preventDefault();
  })



