import Input from '../../../components/Input.js';
import Spacer from '../../../components/Spacer.js';
import Button from '../../../components/Button.js';
export default () => {
  return `
<style>
section.register {
    background: #030303;
    padding: 200px 0 62px;
    color: #ffffff;
    min-height: 100vh;
}

section.register h1 {
    text-align: center;
}

section.register .register-wrapper {
    max-width: 480px;
    margin: 0 auto;
}
</style>

<section class="register">
  <div class="container">
      <h1>Register</h1>
      <div class="register-wrapper">
        <form id="form-register">
          ${Spacer(36)}
          ${Input({
            type: 'email', 
            maxLength: 40, 
            placeholder: 'Your Email*',
            onkeyup: "onChange('email', this.value)",
          })}
          ${Spacer(20)}
          ${Input({
            type: 'password', 
            maxLength: 20, 
            placeholder: 'Enter password*',
            onkeyup: "onChange('password', this.value)",
          })}
          ${Spacer(20)}
          ${Input({
            type: 'password', 
            maxLength: 20, 
            placeholder: 'Confirm password*',
            onkeyup: "onChange('confirmPassword', this.value)",
          })}
          ${Spacer(20)}
          ${Button({label: 'Register', type: 'submit', id: 'form-register-button'})}
        </form>
      </div>
  </div>
</section>
<script>
const values = {};
const onChange = (name, value) =>{
  values[name] = value
}
const button = document.querySelector('#form-register-button');
const form = document.querySelector('#form-register')
form.addEventListener('submit', async(e) => {
  e.preventDefault();
  const{email, password, confirmPassword} = values;

  const buttonHTML = button.innerHTML;
  button.innerHTML = 'Loading...';

  if(password !== confirmPassword){
    alert('password is not true');
    return;
  }
  const response = await fetch('/api/register', {
    method: "POST",
    body: JSON.stringify(values)
  })

  button.innerHTML = buttonHTML;
  const { hasError, message, userId } = await response.json();

 if (hasError) {
        alert(message);
      } else {
        localStorage.setItem('userId', userId);
        document.location.href = '/myProfile'
      }
    
    })
</script>
  `;
}