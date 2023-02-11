function solve() {

    let [name, hall, ticketPrice] = document.querySelectorAll('input');
    let onScreenButton = document.querySelector('button');
    onScreenButton.addEventListener('click', screenBtn);

    let sectionMovies = document.getElementById('movies');
    let ulElement = document.querySelector('ul');
    let archiveSection = document.querySelector('#archive ul');
    let clearButton = document.querySelector('#archive button');

    function screenBtn(event) {

        event.preventDefault();

        if (name.value.trim() === '' || hall.value.trim() === '' || ticketPrice.value.trim() === '' || !Number(ticketPrice.value) || ticketPrice.value === 0) {
            return;
        }

        let liElement = document.createElement('li');
        let spanLiEl = document.createElement('span');
        spanLiEl.textContent = name.value;

        let strongLiEl = document.createElement('strong');
        strongLiEl.textContent = `Hall: ${hall.value}`;

        let divConteiner = document.createElement('div');

        let strongDivPrice = document.createElement('strong');
        strongDivPrice.textContent = Number(ticketPrice.value).toFixed(2);

        let inputDiv = document.createElement('input');
        inputDiv.placeholder = 'Tickets Sold';

        let buttonDiv = document.createElement('button');
        buttonDiv.textContent = 'Archive';

        divConteiner.appendChild(strongDivPrice);
        divConteiner.appendChild(inputDiv);
        divConteiner.appendChild(buttonDiv);
        liElement.appendChild(spanLiEl);
        liElement.appendChild(strongLiEl);
        liElement.appendChild(divConteiner);
        ulElement.appendChild(liElement);

        name.value = '';
        hall.value = '';
        ticketPrice.value = '';

        buttonDiv.addEventListener('click', moveToArchive);

        function moveToArchive(event) {

            event.preventDefault();

            if (!Number(inputDiv.value) || inputDiv.value === 0) {
                return;
            }


            let totalAmount = Number(inputDiv.value) * Number(strongDivPrice.textContent);

            let liArchive = document.createElement('li');
            let spanArchive = document.createElement('span');
            spanArchive.textContent = event.currentTarget.parentElement.parentElement.firstChild.textContent;
            let liStrong = document.createElement('strong');
            liStrong.textContent = `Total amount: ${totalAmount.toFixed(2)}`;
            let liDeletebutton = document.createElement('button');
            liDeletebutton.textContent = 'Delete';
            liArchive.appendChild(spanArchive);
            liArchive.appendChild(liStrong);
            liArchive.appendChild(liDeletebutton);
            archiveSection.appendChild(liArchive);


            event.currentTarget.parentElement.parentElement.remove();

            liDeletebutton.addEventListener('click', removeLi);

            function removeLi(event) {
                event.preventDefault();

                event.currentTarget.parentElement.remove();

            }

            clearButton.addEventListener('click', removeAll);

            function removeAll(event) {
                event.preventDefault();

                let liElements = document.querySelectorAll('#archive li');

                for (let li of liElements) {
                    
                    li.remove();
                }
            }
        }
    }
}