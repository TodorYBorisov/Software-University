window.addEventListener('load', solution);

function solution() {

  let fullNameEl = document.getElementById('fname');
  let emailEl = document.getElementById('email');
  let phoneEl = document.getElementById('phone');
  let addressElement = document.getElementById('address');
  let postCodeEl = document.getElementById('code');

  
  let submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click', submit);
  
  function submit(event) {
    event.preventDefault();
    
    let fullName = fullNameEl.value;
    let email = emailEl.value;
    let phone = phoneEl.value;
    let addressEl = addressElement.value;
    let postCode = postCodeEl.value;
    
    if (fullName === '' || email === '') {
      return;
    }
    
    
    let ulEl = document.getElementById('infoPreview');
    
    let liFullName = document.createElement('li');
    liFullName.textContent = `Full Name: ${fullName}`;
    
    let liEmail = document.createElement('li');
    liEmail.textContent = `Email: ${email}`;
    
    let liPhoneNumber = document.createElement('li');
    liPhoneNumber.textContent = `Phone Number: ${phone}`;
    
    let liAddress = document.createElement('li');
    liAddress.textContent = `Address: ${addressEl}`;
    
    let liPostalCode = document.createElement('li');
    liPostalCode.textContent = `Postal Code: ${postCode}`;
    
    ulEl.appendChild(liFullName);
    ulEl.appendChild(liEmail);
    ulEl.appendChild(liPhoneNumber);
    ulEl.appendChild(liAddress);
    ulEl.appendChild(liPostalCode);
    
    fullNameEl.value = '';
    emailEl.value = '';
    phoneEl.value = '';
    addressElement.value = '';
    postCodeEl.value = '';
    
    submitBtn.disabled = true;
    
    let editBtn = document.getElementById('editBTN');
    let continueBtn = document.getElementById('continueBTN');

    editBtn.disabled = false;
    continueBtn.disabled = false;

    editBtn.addEventListener('click', edit);
    function edit() {

      fullNameEl.value = fullName;
      emailEl.value = email;
      phoneEl.value = phone;
      addressElement.value = addressEl;
      postCodeEl.value = postCode;
      
      editBtn.disabled = true;
      continueBtn.disabled = true;
      submitBtn.disabled = false;

      ulEl.innerHTML = '';
      //Array.from(ulEl.childNodes).forEach((child) => child.remove());
    }

    continueBtn.addEventListener('click', onClick);

    function onClick(params) {
      let div = document.getElementById('block');
      div.innerHTML = '';
      
      //Array.from(div.childNodes).forEach((child) => child.remove());
      let h3 = document.createElement('h3');
      h3.textContent = 'Thank you for your reservation!';

      div.appendChild(h3);
    }
  }
}
