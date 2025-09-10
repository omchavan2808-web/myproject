function checkStrength() {
  const password = document.getElementById('passwordInput').value;
  const result = document.getElementById('strengthResult');

  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  if (password.length < 6) {
    result.textContent = 'Too short';
    result.style.color = 'gray';
  } else if (strength <= 2) {
    result.textContent = 'Weak';
    result.style.color = 'red';
  } else if (strength === 3 || strength === 4) {
    result.textContent = 'Medium';
    result.style.color = 'orange';
  } else {
    result.textContent = 'Strong';
    result.style.color = 'green';
  }
}

function generatePassword() {
  const length = document.getElementById('length').value;
  const includeLower = document.getElementById('includeLower').checked;
  const includeUpper = document.getElementById('includeUpper').checked;
  const includeNumbers = document.getElementById('includeNumbers').checked;
  const includeSymbols = document.getElementById('includeSymbols').checked;

  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
  
  let allChars = '';
  if (includeLower) allChars += lowercase;
  if (includeUpper) allChars += uppercase;
  if (includeNumbers) allChars += numbers;
  if (includeSymbols) allChars += symbols;

  if (allChars === '') {
    alert('Please select at least one character type.');
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  document.getElementById('generatedPassword').value = password;
}
