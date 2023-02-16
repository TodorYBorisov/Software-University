window.addEventListener('load', solve);

function solve() {

    let modelEl = document.getElementById('model');
    let yearEl = document.getElementById('year');
    let descriptionEl = document.getElementById('description');
    let priceEl = document.getElementById('price');
    let addBtn = document.getElementById('add');

    addBtn.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        let model = modelEl.value;
        let year = Number(yearEl.value);
        let description = descriptionEl.value;
        let price = Number(priceEl.value).toFixed(2);

        if (model === '' || year === '' || description === '' || price === '') {
            return;
        }
        if (price < 0 || year < 0) {
            return;
        }

        let tbody = document.getElementById('furniture-list');

        let tr1 = document.createElement('tr');
        tr1.classList.add('info');

        let tdModel = document.createElement('td');
        tdModel.textContent = model;
        let tdPrice = document.createElement('td');
        tdPrice.textContent = price;

        let tdBtns = document.createElement('td');

        let buttonMoreInfo = document.createElement('button');
        buttonMoreInfo.classList.add('moreBtn');
        buttonMoreInfo.textContent = 'More Info';

        let buttonBuy = document.createElement('button');
        buttonBuy.classList.add('buyBtn');
        buttonBuy.textContent = 'Buy it';

        let tr2 = document.createElement('tr');
        tr2.classList.add('hide');

        let tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${year}`;

        let tdDescription = document.createElement('td');
        tdDescription.colSpan = 3;
        tdDescription.textContent = `Description: ${description}`;

        tdBtns.appendChild(buttonMoreInfo);
        tdBtns.appendChild(buttonBuy);

        tr1.appendChild(tdModel);
        tr1.appendChild(tdPrice);
        tr1.appendChild(tdBtns);
        tr2.appendChild(tdYear);
        tr2.appendChild(tdDescription);
        tbody.appendChild(tr1);
        tbody.appendChild(tr2);

        modelEl.value = '';
        yearEl.value = '';
        descriptionEl.value = '';
        priceEl.value = '';

        buttonMoreInfo.addEventListener('click', onClick);

        function onClick() {

            if (buttonMoreInfo.textContent === 'More Info') {
                buttonMoreInfo.textContent = 'Less Info';
                tr2.style.display = 'contents';
            } else {
                buttonMoreInfo.textContent = 'More Info';
                tr2.style.display = 'none';
            }
        }

        buttonBuy.addEventListener('click', buy);

        function buy() {
            tr1.remove();
            tr2.remove();

            let totalSum = document.querySelector('.total-price');

            let total = Number(totalSum.textContent);
            total += Number(price);

            totalSum.textContent = (total).toFixed(2);
        }
    }
}
