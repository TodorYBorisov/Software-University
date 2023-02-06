function solve() {

  let buttonsElement = document.querySelectorAll('button');

  buttonsElement[0].addEventListener('click', generate);

  function generate() {

    let inputFiled = JSON.parse(document.querySelectorAll('#exercise textarea')[0].value);

    for (let object of inputFiled) {

      let tr = document.createElement('tr');

      let td1 = document.createElement('td');
      let img = document.createElement('img');
      img.src = object.img;
      td1.appendChild(img);
      tr.appendChild(td1);

      let p1 = document.createElement('p');
      let td2 = document.createElement('td');
      p1.textContent = object.name;
      td2.appendChild(p1);
      tr.appendChild(td2);

      let p2 = document.createElement('p');
      let td3 = document.createElement('td');
      p2.textContent = Number(object.price);
      td3.appendChild(p2);
      tr.appendChild(td3);

      let p3 = document.createElement('p');
      let td4 = document.createElement('td');
      p3.textContent = Number(object.decFactor);
      td4.appendChild(p3);
      tr.appendChild(td4);

      let input = document.createElement('input');
      let td5 = document.createElement('td');
      input.type = 'checkbox';
      td5.appendChild(input);
      tr.appendChild(td5);

      document.querySelector('tbody').appendChild(tr);
    }
  }

  buttonsElement[1].addEventListener('click', buy);

  function buy() {

    let checkBoxes = Array.from(document.querySelectorAll('tbody tr td input')).filter((e) => e.checked);
    // хващаме всички чекбокси които са чекнати, като филтрираме масива с филтър функцият, като се създава нов масив само с чекнатите елементи
    let bought = [];
    let price = 0;
    let decoration = 0;

    for (let element of checkBoxes) {

      let parent = element.parentElement.parentElement;
      //намираме родителя, за да може да вземем всички параграфи
      let data = Array.from(parent.querySelectorAll('p'));

      bought.push(data[0].textContent);
      price += Number(data[1].textContent);
      decoration += Number(data[2].textContent);
    }
    //намираме полето, за да му закачим крайния резултата
    let outputField = document.querySelectorAll('#exercise textarea')[1];

    outputField.textContent += `Bought furniture: ${bought.join(', ')}\r\n`;
    outputField.textContent += `Total price: ${price.toFixed(2)}\r\n`;
    outputField.textContent += `Average decoration factor: ${(decoration / checkBoxes.length)}`;
  }
}