window.addEventListener('load', solve);

function solve() {
    let productTypeEl = document.getElementById('type-product');
    let descriptionEl = document.getElementById('description');
    let clientNameEl = document.getElementById('client-name');
    let phoneEl = document.getElementById('client-phone');
    let sendBtn = document.querySelector('button');

    sendBtn.addEventListener('click', send);

    function send(event) {
        event.preventDefault();

        let productType = productTypeEl.value;
        let description = descriptionEl.value;
        let clientName = clientNameEl.value;
        let phone = phoneEl.value;

        if (description === '' || clientName === '' || phone === '') {
            return;
        }

        let receiveOrders = document.getElementById('received-orders');

        let div = document.createElement('div');
        div.classList.add('container');

        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${productType}`;

        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${clientName}, ${phone}`;

        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${description}`;

        let startBtn = document.createElement('button');
        startBtn.classList.add('start-btn');
        startBtn.textContent = 'Start repair';

        let finishBtn = document.createElement('button');
        finishBtn.classList.add('finish-btn');
        finishBtn.disabled = true;
        finishBtn.textContent = 'Finish repair';

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startBtn);
        div.appendChild(finishBtn);

        receiveOrders.appendChild(div);

        descriptionEl.value = '';
        clientNameEl.value = '';
        phoneEl.value = '';
        productTypeEl.value = '';


        startBtn.addEventListener('click', start);

        function start() {
            startBtn.disabled = true;
            finishBtn.disabled = false;
        }

        finishBtn.addEventListener('click', finish);

        function finish() {

            let completedOrders = document.getElementById('completed-orders');
            completedOrders.appendChild(div);
            startBtn.remove();
            finishBtn.remove();
        }
        let clearBtn = document.querySelector('.clear-btn');

        clearBtn.addEventListener('click', remove);
        function remove() {
            let completedOrders = document.querySelectorAll('#completed-orders div');

            Array.from(completedOrders).forEach((divEl) => divEl.remove());
        }
    }
}