window.addEventListener('load', solve);

function solve() {

    let firstNameEl = document.getElementById('first-name');
    let lastNameEl = document.getElementById('last-name');
    let peopleEl = document.getElementById('people-count');
    let dataEl = document.getElementById('from-date');
    let daysEl = document.getElementById('days-count');
    let nextBtn = document.getElementById('next-btn');

    nextBtn.addEventListener('click', next);

    function next(event) {
        event.preventDefault();

        let firstName = firstNameEl.value;
        let lastName = lastNameEl.value;
        let people = peopleEl.value;
        let data = dataEl.value;
        let days = daysEl.value;

        if (firstName === '' || lastName === '' || people === '' || data === '' || days === '') {
            return;
        }

        let ulTicket = document.querySelector('.ticket-info-list');

        let li = document.createElement('li');
        li.classList.add('ticket');

        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstName} ${lastName}`;

        let p1 = document.createElement('p');
        p1.textContent = `From date: ${data}`;

        let p2 = document.createElement('p');
        p2.textContent = `For ${days} days`;

        let p3 = document.createElement('p');
        p3.textContent = `For ${people} people`;

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';

        let continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';

        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        ulTicket.appendChild(li);

        firstNameEl.value = '';
        lastNameEl.value = '';
        peopleEl.value = '';
        dataEl.value = '';
        daysEl.value = '';

        nextBtn.disabled = true;
        editBtn.disabled = false;
        continueBtn.disabled = false;

        editBtn.addEventListener('click', edit);

        function edit() {

            li.remove();
            nextBtn.disabled = false;

            firstNameEl.value = firstName;
            lastNameEl.value = lastName;
            peopleEl.value = people;
            dataEl.value = data;
            daysEl.value = days;
        }

        continueBtn.addEventListener('click', conti);

        function conti() {

            li.remove();

            let ulConfirm = document.querySelector('.confirm-ticket');

            ulConfirm.appendChild(li);

            editBtn.remove();
            continueBtn.remove();

            let confirmBtn = document.createElement('button');
            confirmBtn.classList.add('confirm-btn');
            confirmBtn.textContent = 'Confirm';

            let cancelBtn = document.createElement('button');
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'Cancel';

            li.appendChild(confirmBtn);
            li.appendChild(cancelBtn);

            cancelBtn.addEventListener('click', remove);

            function remove() {

                li.remove();
                nextBtn.disabled = false;
            }

            confirmBtn.addEventListener('click', removeDiv);

            function removeDiv() {

                let removeDivEl = document.getElementById('main');
                removeDivEl.remove();

                let body = document.getElementById('body');

                let h1 = document.createElement('h1');
                h1.setAttribute('id', 'thank-you');
                h1.textContent = 'Thank you, have a nice day!';

                let backBtn = document.createElement('button');
                backBtn.setAttribute('id', 'back-btn');
                backBtn.textContent = 'Back';

                body.appendChild(h1);
                body.appendChild(backBtn);

                backBtn.addEventListener('click', loadWeb);

                function loadWeb() {

                    location.reload();

                }
            }
        }
    }
}




