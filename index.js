const heading =
  document.getElementById('heading');

const message =
  document.getElementById('message');

const startBtn =
  document.getElementById('startBtn');

startBtn.addEventListener('click', function () {

  heading.innerHTML =
    'Button clicked!';

  message.innerHTML =
    'Your JavaScript is connected successfully.';
});