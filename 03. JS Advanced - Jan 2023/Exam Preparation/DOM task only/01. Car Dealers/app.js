window.addEventListener('load', solve);

function solve() {

  let makeInput = document.getElementById('make');
  let modelInput = document.getElementById('model');
  let yearInput = document.getElementById('year');
  let fuelInput = document.getElementById('fuel');
  let priceOriginalInput = document.getElementById('original-cost');
  let sellingPriceInput = document.getElementById('selling-price');

  let publishBtn = document.getElementById('publish');

  publishBtn.addEventListener('click', addInfo);

  function addInfo(event) {

    event.preventDefault();

    let make = makeInput.value;
    let model = modelInput.value;
    let yeaR = Number(yearInput.value);
    let fuel = fuelInput.value;
    let priceOriginal = Number(priceOriginalInput.value);
    let sellingPrice = Number(sellingPriceInput.value);

    if (make === '' || model === '' || yeaR === '' || fuel === '' || priceOriginal > sellingPrice) {
      return;
    }

    let tbody = document.getElementById('table-body');

    let tr = document.createElement('tr');
    tr.classList.add('row');

    let td1 = document.createElement('td');
    td1.textContent = make;

    let td2 = document.createElement('td');
    td2.textContent = model;

    let td3 = document.createElement('td');
    td3.textContent = yeaR;

    let td4 = document.createElement('td');
    td4.textContent = fuel;

    let td5 = document.createElement('td');
    td5.textContent = priceOriginal;

    let td6 = document.createElement('td');
    td6.textContent = sellingPrice;

    let tdBtns = document.createElement('td');

    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';

    let sellBtn = document.createElement('button');
    sellBtn.classList.add('action-btn');
    sellBtn.classList.add('sell');
    sellBtn.textContent = 'Sell';

    tdBtns.appendChild(editBtn);
    tdBtns.appendChild(sellBtn);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(tdBtns);

    tbody.appendChild(tr);

    makeInput.value = '';
    modelInput.value = '';
    yearInput.value = '';
    fuelInput.value = '';
    priceOriginalInput.value = '';
    sellingPriceInput.value = '';

    editBtn.addEventListener('click', edit);

    function edit() {

      tr.remove();

      makeInput.value = make;
      modelInput.value = model;
      yearInput.value = yeaR;
      fuelInput.value = fuel;
      priceOriginalInput.value = priceOriginal;
      sellingPriceInput.value = sellingPrice;

    }

    sellBtn.addEventListener('click', sell);

    function sell() {

      tr.remove();


      let ul = document.getElementById('cars-list');

      let liSold = document.createElement('li');
      liSold.classList.add('each-list');

      let differenceInPrice = sellingPrice - priceOriginal;

      let span1 = document.createElement('span');
      span1.textContent = `${make} ${model}`;
      let span2 = document.createElement('span');
      span2.textContent = yeaR;
      let span3 = document.createElement('span');
      span3.textContent = differenceInPrice;

      liSold.appendChild(span1);
      liSold.appendChild(span2);
      liSold.appendChild(span3);

      ul.appendChild(liSold);

      let profit = document.getElementById('profit');

      let sum = Number(profit.textContent);
      sum += Number(differenceInPrice);
      profit.textContent = sum.toFixed(2);
    }
  }
}
