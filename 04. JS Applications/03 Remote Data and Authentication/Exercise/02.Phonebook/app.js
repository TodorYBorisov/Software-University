function attachEvents() {

    let ul = document.getElementById('phonebook');
    let loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', loadData);

    async function loadData() {
        ul.innerHTML = '';
        let url = 'http://localhost:3030/jsonstore/phonebook';

        try {
            let response = await fetch(url);
            if (response.ok === false) {
                const error = await response.json();
                throw error;
            }
            let data = await response.json();

            Object.values(data).forEach(element => {

                let li = document.createElement('li');
                li.textContent = `${element.person}: ${element.phone}`;

                let deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.setAttribute('id', element._id);
                deleteBtn.addEventListener('click', deleteEntry);

                li.appendChild(deleteBtn);
                ul.appendChild(li);

                async function deleteEntry(event) {

                    const btnId = event.target.id;

                    const choice = confirm('Are you sure?');
                    if (choice == false) {
                        return;
                    }

                    if (event.target.textContent === 'Delete') {

                        let url = 'http://localhost:3030/jsonstore/phonebook' + `/${btnId}`;

                        const options = {
                            method: 'delete',
                        };

                        const response = await fetch(url, options);
                        event.target.parentNode.remove();
                    }
                }
            });
        } catch (error) {
            alert(error.message);
        }
    }

    let createEl = document.getElementById('btnCreate');
    createEl.addEventListener('click', postData);
    let person = document.getElementById('person');
    let phone = document.getElementById('phone');

    async function postData() {

        if (person.value == '' || phone.value == '') {
            return alert('Please fill the epmty fileds!');
        }

        try {
            let url = 'http://localhost:3030/jsonstore/phonebook';

            let newentry = {
                person: person.value,
                phone: phone.value
            };
            const options = {
                method: 'post',
                headers: { 'Content-type': 'applications/json' },
                body: JSON.stringify(newentry)
            };

            const response = await fetch(url, options);

            if (response.ok == false) {
                const error = await response.json();
                throw error;
            }

            person.value = '';
            phone.value = '';

            loadBtn.click();
        } catch (error) {
            alert(error.message);
        }

    }

}

attachEvents();