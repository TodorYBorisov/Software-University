function solve() {
    
    let recipientEl = document.getElementById('recipientName');
    let titleEl = document.getElementById('title');
    let messageEl = document.getElementById('message');
    let addBtnEl = document.getElementById('add');
    let resetBtnEl = document.getElementById('reset');
    
    resetBtnEl.addEventListener('click', clearInput);
    
    function clearInput(event) {
        event.preventDefault();
    
        recipientEl.value = '';
        titleEl.value = '';
        messageEl.value = '';
    
    }
    addBtnEl.addEventListener('click', addInfo);
    
    function addInfo(event) {
        event.preventDefault();

        let recipient = recipientEl.value;
        let title = titleEl.value;
        let message = messageEl.value;

        if (recipient === '' || title === '' || message === '') {
            return;
        }

        let ulEl = document.getElementById('list');

        let liEl = document.createElement('li');

        let h4TitleEl = document.createElement('h4');
        h4TitleEl.textContent = `Title: ${title}`;

        let h4RecipientEl = document.createElement('h4');
        h4RecipientEl.textContent = `Recipient Name: ${recipient}`;

        let spanEl = document.createElement('span');
        spanEl.textContent = message;

        let divBtns = document.createElement('div');
        divBtns.setAttribute('id', 'list-action');

        let sendBtn = document.createElement('button');
        sendBtn.setAttribute('type', 'submit');
        sendBtn.setAttribute('id', 'send');
        sendBtn.textContent = 'Send';

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.setAttribute('id', 'delete');
        deleteBtn.textContent = 'Delete';

        divBtns.appendChild(sendBtn);
        divBtns.appendChild(deleteBtn);

        liEl.appendChild(h4TitleEl);
        liEl.appendChild(h4RecipientEl);
        liEl.appendChild(spanEl);
        liEl.appendChild(divBtns);
        ulEl.appendChild(liEl);

        recipientEl.value = '';
        titleEl.value = '';
        messageEl.value = '';


        sendBtn.addEventListener('click', emailSent);

        function emailSent(event) {
            event.preventDefault();

            liEl.remove();

            let ulElSent = document.querySelector('.sent-list');

            let liElSent = document.createElement('li');
            let spanRecipient = document.createElement('span');
            spanRecipient.textContent = `To: ${recipient}`;
            let spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${title}`;

            let divSent = document.createElement('div');
            divSent.classList.add('btn');

            let deleteBtnSent = document.createElement('button');
            deleteBtnSent.textContent = 'Delete';
            deleteBtnSent.setAttribute('type', 'submit');
            deleteBtnSent.setAttribute('class', 'delete');

            liElSent.appendChild(spanRecipient);
            liElSent.appendChild(spanTitle);
            divSent.appendChild(deleteBtnSent);
            liElSent.appendChild(divSent);

            ulElSent.appendChild(liElSent);

            deleteBtnSent.addEventListener('click', removeContent);

            function removeContent(event) {
                let ulDeleted = document.querySelector('.delete-list');
                liElSent.remove();
                let liDel = document.createElement('li');

                let spanDelTo = document.createElement('span');
                spanDelTo.textContent = `To: ${recipient}`;

                let spanDelTitle = document.createElement('span');
                spanDelTitle.textContent = `Title: ${title}`;

                liDel.appendChild(spanDelTo);
                liDel.appendChild(spanDelTitle);
                ulDeleted.appendChild(liDel);
            }

        }

        deleteBtn.addEventListener('click', moveEmailstoDeleted);

        function moveEmailstoDeleted(event) {
            event.preventDefault();

            let ulDeleted = document.querySelector('.delete-list');

            let liDel = document.createElement('li');

            let spanDelTo = document.createElement('span');
            spanDelTo.textContent = `To: ${recipient}`;

            let spanDelTitle = document.createElement('span');
            spanDelTitle.textContent = `Title: ${title}`;

            liDel.appendChild(spanDelTo);
            liDel.appendChild(spanDelTitle);
            ulDeleted.appendChild(liDel);

            liEl.remove();
        }
    }
}

solve();