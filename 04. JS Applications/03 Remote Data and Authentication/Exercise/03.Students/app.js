window.addEventListener('load', loadData);

document.getElementById('form').addEventListener('submit', postData);

async function postData(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    // const studentData = {
    //     firstName: formData.get('firstName'),
    //     lastName: formData.get('lastName'),
    //     facultyNumber: formData.get('facultyNumber'),
    //     grade: Number(formData.get('grade')),

    // };

    const { firstName, lastName, facultyNumber, grade } = Object.fromEntries(formData.entries());

    if (firstName == '' || lastName == '' || facultyNumber == '' || Number(grade) == '') {
        return alert('All fields must be filled!');
    }

    const url = 'http://localhost:3030/jsonstore/collections/students';

    const options = {
        method: 'post',
        headers: { 'Content-type': 'applications/json' },
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
    };
    try {
        const response = await fetch(url, options);
        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }

        const userData = await response.json();

        event.target.reset();

    } catch (error) {
        alert(error.message);
    }

   loadData();
}

async function loadData() {
    const url = 'http://localhost:3030/jsonstore/collections/students';

    try {
        const response = await fetch(url);
        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }

        const data = await response.json();
        const rows = Object.values(data).map(createRow);
        
        // //тук заместваме в таблицата с новите редове който ще дойдат от функцията createRow
        document.querySelector('#results tbody').replaceChildren(...rows);
    
        // //replaceChildren приема списък от нодове и трябва да се спредне с трите точки за да стане на масив

    } catch (error) {
        alert(error.message);
    }
}

function createRow(record) {

    const tr = document.createElement('tr');

    tr.innerHTML =
        `<td>${record.firstName}</td>
        <td>${record.lastName}</td>
        <td>${record.facultyNumber}</td>
        <td>${Number(record.grade).toFixed(2)}</td>`;

    return tr;
    
}