async function solution() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    const sectionElement = document.getElementById('main');

    try {
        const response = await fetch(url);

        if (response.status !== 200) {
            throw new Error(`${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        sectionElement.innerHTML = '';

        for (let item of data) {

            const urlData = `http://localhost:3030/jsonstore/advanced/articles/details/${item._id}`;

            let response = await fetch(urlData);

            if (response.status !== 200) {
                throw new Error('Error');
            }
            let dataItem = await response.json();

            const div = document.createElement('div');
            div.setAttribute('class', 'accordion');

            const div1 = document.createElement('div');
            div1.setAttribute('class', 'head');

            const span = document.createElement('span');
            span.textContent = `${dataItem.title}`;

            const button = document.createElement('button');
            button.setAttribute('class', 'button');
            button.setAttribute('id', `${dataItem._id}`);
            button.textContent = 'More';

            const div2 = document.createElement('div');
            div2.setAttribute('class', 'extra');

            const p = document.createElement('p');
            p.textContent = `${dataItem.content}`;

            div1.appendChild(span);
            div1.appendChild(button);
            div.appendChild(div1);
            div2.appendChild(p);
            div.appendChild(div2);
            sectionElement.appendChild(div);

            document.querySelector('.extra').style.display = 'none';

            button.addEventListener('click', showInfo);

            function showInfo(event) {

                const button = event.target;
                const section = button.parentNode.parentNode;
                const dipslayInfo = section.getElementsByClassName('extra')[0];

                if (button.textContent === 'More') {
                    dipslayInfo.style.display = 'block';
                    button.textContent = 'Less';
                } else {
                    dipslayInfo.style.display = 'none';
                    button.textContent = 'More';
                }
            }
        }

    } catch (error) {
        alert(error.message);
        throw error;
    }
}
solution();