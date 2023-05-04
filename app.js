const form = document.querySelector('form');
const messageContainer = document.querySelector('#message-container');
const message = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.querySelector('#name').value;
  const date = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;
  const duration = document.querySelector('#duration').value;
  
  const startTime = new Date(`${date}T${time}`);
  const endTime = new Date(startTime.getTime() + duration * 60000);
  
  const today = new Date();
  
  if (startTime < today) {
    message.innerHTML = '<p id="error-message">Error: The meeting cannot be scheduled in the past.</p>';
  } else {
    message.innerHTML = `<p id="success-message">Success: ${name}, your meeting has been scheduled for ${startTime.toLocaleString()} to ${endTime.toLocaleString()}.</p>`;
    form.reset();
  }
  
  messageContainer.style.display = 'block';
});
