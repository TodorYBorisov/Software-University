window.addEventListener("load", solve);

function solve() {

  let firstNameEl = document.getElementById('first-name');
  let lastNameEl = document.getElementById('last-name');
  let ageEl = document.getElementById('age');
  let genderEl = document.getElementById('genderSelect');
  let dishInfoEl = document.getElementById('task');

  let submitBtn = document.getElementById('form-btn');

  submitBtn.addEventListener('click', submit);

  function submit(event) {
    event.preventDefault();

    let firstName = firstNameEl.value;
    let lastName = lastNameEl.value;
    let age = ageEl.value;
    let gender = genderEl.value;
    let dishInfo = dishInfoEl.value;

    if (firstName === '' || lastName === '' || age === '' || dishInfo === '') {
      return;
    }

    let ul = document.getElementById('in-progress');

    let li = document.createElement('li');
    li.classList.add('each-line');

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `${firstName} ${lastName}`;

    let p1 = document.createElement('p');
    p1.textContent = `${gender}, ${age}`;

    let p2 = document.createElement('p');
    p2.textContent =`Dish description: ${dishInfo}`;

    let edit = document.createElement('button');
    edit.textContent = 'Edit';
    edit.classList.add('edit-btn');

    let complete = document.createElement('button');
    complete.textContent = 'Mark as complete';
    complete.classList.add('complete-btn');

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    li.appendChild(article);
    li.appendChild(edit);
    li.appendChild(complete);

    ul.appendChild(li);

    firstNameEl.value = '';
    lastNameEl.value = '';
    ageEl.value = '';
    genderEl.value = '';
    dishInfoEl.value = '';

    let actualCounter = document.getElementById('progress-count');
    let counter = Number(actualCounter.textContent);
    counter++;
    actualCounter.textContent = Number(counter);


    edit.addEventListener('click', editBtn);

    function editBtn() {
      li.remove();

      firstNameEl.value = firstName;
      lastNameEl.value = lastName;
      ageEl.value = age;
      genderEl.value = gender;
      dishInfoEl.value = dishInfo;

      let counter = Number(actualCounter.textContent);
      counter--;
      actualCounter.textContent = Number(counter);
    }

    complete.addEventListener('click', nextStep);

    function nextStep() {
      li.remove();

      let ulFinish = document.getElementById('finished');
      ulFinish.appendChild(li);

      let counter = Number(actualCounter.textContent);
      counter--;
      actualCounter.textContent = Number(counter);

      edit.remove();
      complete.remove();

    }

    let clear = document.getElementById('clear-btn');

    clear.addEventListener('click', clearAll);
    function clearAll() {
      li.remove();

    }
  }
}