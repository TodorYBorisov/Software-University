const userData = JSON.parse(localStorage.getItem('userData')); //всички данни за юзъра

document.getElementById('user').style.display = 'none';

const logoutBtn = document.getElementById('user');

const welcome = document.querySelector('.email span');
const addBtn = document.querySelector('#addForm .add');

const section = document.getElementById('catches');

//Проверва дали е логнат потребителя
if (userData) {
    section.innerHTML = '';//Задължително зачистваме старите неща шреди да лоауднем от сървъра!

    document.getElementById('guest').style.display = 'none';
    logoutBtn.style.display = 'inline-block';
    welcome.textContent = userData.email;
    addBtn.disabled = false;

    loadData();
} else {

    document.getElementById('user').style.display = 'none';

}

//LOGOUT
document.getElementById('logout').addEventListener('click', onLogout);
async function onLogout() {
    const url = 'http://localhost:3030/users/logout';
    const options = {

        headers: { 'X-Authorization': userData.token },
    };
    const response = await fetch(url, options);

    if (response.status !== 204) {
        throw new Error(`Error: ${response.statusText} - ${response.status}`);
    }

    localStorage.clear();
    //викаме функциятя за да опарви навигацията
    document.querySelector('#logout').style.display = 'none';
    document.querySelector('#addForm .add').disabled = true;
    document.querySelector('#guest').style.display = 'inline-block';
    document.querySelector('.email span').textContent = 'guest';

    window.location = ('./index.html');
}
document.querySelector('.load').addEventListener('click', loadData);

//Load all data
async function loadData(event) {
    const url = 'http://localhost:3030/data/catches';
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById('catches').replaceChildren(...data.map(createCatch));
    //replaceChildren приема списък от нодове и трябва да се спредне с трите точки за да стане на масив
}

function createCatch(data) {
    const isDisabled = (userData && data._ownerId === userData.id) ? false : true;

    const catches = createElement('div', { 'class': 'catch' },
        createElement('label', {}, 'Angler'),
        createElement('input', { 'type': 'text', 'class': 'angler', value: data.angler, disabled: isDisabled }),
        createElement('label', {}, 'Weight'),
        createElement('input', { 'type': 'text', 'class': 'weight', value: data.weight, disabled: isDisabled }),
        createElement('label', {}, 'Species'),
        createElement('input', { 'type': 'text', 'class': 'species', value: data.species, disabled: isDisabled }),
        createElement('label', {}, 'Location'),
        createElement('input', { 'type': 'text', 'class': 'location', value: data.location, disabled: isDisabled }),
        createElement('label', {}, 'Bait'),
        createElement('input', { 'type': 'text', 'class': 'bait', value: data.bait, disabled: isDisabled }),
        createElement('label', {}, 'Capture Time'),
        createElement('input', { 'type': 'number', 'class': 'captureTime', value: data.captureTime, disabled: isDisabled }),
        createElement('button', { 'class': 'update', id: data._id, disabled: isDisabled }, 'Update'),
        createElement('button', { 'class': 'delete', id: data._id, disabled: isDisabled }, 'Delete')
    );
    return catches;

}
//функция за правене на елементи;
function createElement(type, attr, ...content) {

    const element = document.createElement(type);

    for (const item in attr) {
        if (item === 'class') {
            element.classList.add(attr[item]);
        } else if (item === 'disable') {
            element.disabled = attr[item];
        } else {
            element[item] = attr[item];
        }
    }

    for (let item of content) {
        if (typeof item === 'string' || typeof item === 'number') {
            item = document.createTextNode(item);
        }
        element.appendChild(item);
    }
    return element;
}

//Add на нов запис към базата
document.getElementById('addForm').addEventListener('submit', onAdd);

async function onAdd(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const { angler, weight, species, location, bait, captureTime } = Object.fromEntries(formData.entries());
    if (angler === '' || weight === '' || species === '' || location === '' || bait === '' || captureTime === '') {

        return alert('No empty fields allowed!');
    };

    const url = 'http://localhost:3030/data/catches';

    const options = {
        method: 'post',
        headers: {
            'Content-type': 'applications/json',
            'X-Authorization': userData.token
        },
        body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
    };
    try {
        const response = await fetch(url, options);
        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }

        const data = await response.json();
        loadData();
        event.target.reset();
    } catch (error) {
        alert(error.message);
    }
}
//Button delegation for DELETE and UPDATE

document.getElementById('main').addEventListener('click', buttonsDelegation);
//dataset го ползва за да хване  id на бутона
function buttonsDelegation(event) {

    const currentBtn = event.target.textContent;
    const id = event.target.id === '' ? event.target.dataset.id : event.target.id;
    const currentCatchEl = event.target.parentElement;

    if (currentBtn === 'Delete') {
        deleteCacth(id);
    } else if (currentBtn === 'Update') {
        updateCatchElement(id, currentCatchEl);
    }
}

// DELETE след като сме делегирали бутоните
async function deleteCacth(id) {
    const url = 'http://localhost:3030/data/catches' + `/${id}`;
    const options = {
        method: 'delete',
        headers: {
            'X-Authorization': userData.token,
            'Content-type': 'application/json'
        },
    };
    await fetch(url, options);
    loadData();
}

//UPDATE на конкретния елемент

async function updateCatchElement(id, currentCatchEl) {

    let [angler, weight, species, location, bait, captureTime] = currentCatchEl.querySelectorAll('input');

    try {
        const url = `http://localhost:3030/data/catches/${id}`;
        const options = {
            method: 'put',
            headers: {
                'Content-type': 'applications/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify({
                angler: angler.value,
                weight: Number(weight.value),
                species: species.value,
                location: location.value,
                bait: bait.value,
                captureTime: Number(captureTime.value)
            })
        };
        const response = await fetch(url, options);
        if (response.ok == false) {
            const error = await response.json();
            throw error;
        };

    } catch (error) {
        alert(error.message);
    }

    loadData();
}