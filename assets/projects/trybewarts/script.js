const btnlogin = document.getElementById('btnlogin');
const login = document.getElementById('login');
const password = document.getElementById('password');
const textarea = document.getElementById('textarea');
const countChar = document.getElementById('counter');
const checkboxAgree = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const forms = document.getElementById('evaluation-form');

function authentication() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

textarea.addEventListener('input', () => {
  const maxLength = textarea.getAttribute('maxlength');
  const currentLength = textarea.value.length;
  const count = parseInt(maxLength, 10) - parseInt(currentLength, 10);
  countChar.innerHTML = `${count}`;
});

checkboxAgree.onchange = function enableSubmitBtn() {
  submitBtn.disabled = !this.checked;
};

btnlogin.addEventListener('click', authentication);
submitBtn.disabled = true;

function getValues() {
  const fname = document.getElementById('input-name').value;
  const lname = document.getElementById('input-lastname').value;
  const fullName = `${fname} ${lname}`;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const contentLearn = document.querySelectorAll('input.subject:checked');
  const savedMensage = textarea.value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const rating = document.querySelector('input[name="rate"]:checked').value;
  const valuesLearn = [];
  const informationsForm = {};

  for (let i = 0; i < contentLearn.length; i += 1) {
    valuesLearn[i] = contentLearn[i].value;
  }

  const valuesSeparateComma = valuesLearn.join(', ');
  informationsForm.Nome = fullName;
  informationsForm.Email = email;
  informationsForm.Casa = house;
  informationsForm.Família = family;
  informationsForm.Matérias = valuesSeparateComma;
  informationsForm.Avaliação = rating;
  informationsForm.Observações = savedMensage;

  return informationsForm;
}

function createForms() {
  const saveValues = getValues();
  let temp;
  for (let i = 0; i < saveValues.length; i += 1) {
    temp = document.createElement('p').textContent = saveValues[i];
    forms.appendChild(temp);
  }
  console.log(temp)
}

function submitForms(e) {
  e.preventDefault();
  // const elements = createForms();
  const one = document.getElementById('container-fullname');
  const two = document.getElementById('container-email-house');
  const three = document.getElementById('container-rating');
  const four = document.getElementById('container-textarea');
  const partition = document.getElementById('second-partition');
  const familyContent = document.getElementById('form-pt2');
  one.remove();
  two.remove();
  three.remove();
  four.remove();
  partition.remove();
  familyContent.remove();
  createForms();
  // for (let i = 0; i < elements.length; i += 1) {
  //   forms.appendChild(elements[i]);
  // }
  // forms.appendChild(document.createElement('hr'));
}

submitBtn.addEventListener('click', submitForms);
// submitBtn.addEventListener('click', createForms);
