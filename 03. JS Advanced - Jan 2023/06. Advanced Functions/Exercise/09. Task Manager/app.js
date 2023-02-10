function solve() {

    let inputTask = document.getElementById('task');
    let inputDesc = document.getElementById('description');
    let inputDate = document.getElementById('date');
    let addButton = document.getElementById('add');

    let [addSection, openSection, inProgressSection, completeSection] = document.querySelectorAll('section');

    addButton.addEventListener('click', addInfo);

    function addInfo(event) {

        if (inputTask.value.trim() === '' || inputDesc.value.trim() === '' || inputDate.value.trim() === '') {
            return;
        }
        event.preventDefault();

        let article = document.createElement('article');

        let h3Element = document.createElement('h3');
        h3Element.textContent = inputTask.value;

        let p1Element = document.createElement('p');
        p1Element.textContent = `Description: ${inputDesc.value}`;

        let p2Element = document.createElement('p');
        p2Element.textContent = `Due Date: ${inputDate.value}`;

        let divButtons = document.createElement('div');
        divButtons.classList.add('flex');

        let startButton = document.createElement('button');
        startButton.textContent = 'Start';
        startButton.classList.add('green');
        startButton.addEventListener('click', moveToProgress);

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('red');

        divButtons.appendChild(startButton);
        divButtons.appendChild(deleteButton);
        article.appendChild(h3Element);
        article.appendChild(p1Element);
        article.appendChild(p2Element);
        article.appendChild(divButtons);

        openSection.lastElementChild.appendChild(article);

        deleteButton.addEventListener('click', removeArticle);

        inputTask.value = '';
        inputDesc.value = '';
        inputDate.value = '';

        function removeArticle() {
            article.remove();
        }

        function moveToProgress() {

            startButton.remove();
            let finishButton = document.createElement('button');
            finishButton.textContent = 'Finish';
            finishButton.classList.add('orange');
            divButtons.appendChild(finishButton);

            inProgressSection.lastElementChild.appendChild(article);

            finishButton.addEventListener('click', moveToLastsection);
        }

        function moveToLastsection() {

            completeSection.lastElementChild.append(article);
            divButtons.remove();
        }
    }
}