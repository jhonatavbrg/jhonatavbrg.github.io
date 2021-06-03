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

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const informationForms = getValues();
  const keysObj = Object.keys(informationForms);
  const valuesObj = Object.values(informationForms);
  
  const div = document.getElementById('container-forms');
  const formsResponse = document.createElement('div');
  formsResponse.classList.add('container-response');
  div.appendChild(formsResponse);
  const nameOnParagraph = document.createElement('p');
  nameOnParagraph.classList.add('paragraph-info');
  nameOnParagraph.innerText = `${keysObj[0]}: ${valuesObj[0]}`;
  formsResponse.appendChild(nameOnParagraph);
  const emailOnParagraph = document.createElement('p');
  emailOnParagraph.classList.add('paragraph-info');
  emailOnParagraph.innerText = `${keysObj[1]}: ${valuesObj[1]}`;
  formsResponse.appendChild(emailOnParagraph);
  const houseOnParagraph = document.createElement('p');
  houseOnParagraph.classList.add('paragraph-info');
  houseOnParagraph.innerText = `${keysObj[2]}: ${valuesObj[2]}`;
  formsResponse.appendChild(houseOnParagraph);
  const familyOnParagraph = document.createElement('p');
  familyOnParagraph.classList.add('paragraph-info');
  familyOnParagraph.innerText = `${keysObj[3]}: ${valuesObj[3]}`;
  formsResponse.appendChild(familyOnParagraph);
  const contentsOnParagraph = document.createElement('p');
  contentsOnParagraph.classList.add('paragraph-info');
  contentsOnParagraph.innerText = `${keysObj[4]}: ${valuesObj[4]}`;
  formsResponse.appendChild(contentsOnParagraph);
  const assessmentOnParagraph = document.createElement('p');
  assessmentOnParagraph.classList.add('paragraph-info');
  assessmentOnParagraph.innerText = `${keysObj[5]}: ${valuesObj[5]}`;
  formsResponse.appendChild(assessmentOnParagraph);
  const commentOnParagraph = document.createElement('p');
  commentOnParagraph.classList.add('paragraph-info');
  commentOnParagraph.innerText = `${keysObj[6]}: ${valuesObj[6]}`;
  formsResponse.appendChild(commentOnParagraph);
  
  forms.remove();
});
