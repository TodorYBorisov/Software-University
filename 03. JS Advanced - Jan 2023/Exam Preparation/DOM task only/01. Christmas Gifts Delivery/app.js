function solution() {

    let inputGift = document.querySelector('[type="text"]');
    let addBtn = document.querySelector('button');
    
    addBtn.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        let gift = inputGift.value;

        let ulGiftSection = document.querySelectorAll('ul')[0];
        let li = document.createElement('li');
        li.classList.add('gift');
        li.textContent = gift;

        let sendBtn = document.createElement('button');
        sendBtn.setAttribute('id', 'sendButton');
        sendBtn.textContent = 'Send';

        let discardBtn = document.createElement('button');
        discardBtn.id = 'discardButton';
        discardBtn.textContent = 'Discard';

        li.appendChild(sendBtn);
        li.appendChild(discardBtn);

        ulGiftSection.appendChild(li);

        let allLi = document.querySelectorAll('.gift');

        Array.from(allLi).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach((li) => ulGiftSection.appendChild(li));
        
        inputGift.value = '';

        sendBtn.addEventListener('click', moveToSent);

        function moveToSent() {
            let ulSent = document.querySelectorAll('ul')[1];
           
            ulSent.append(li);

            sendBtn.remove();
            discardBtn.remove();
        }

        discardBtn.addEventListener('click', disc);

        function disc() {
            let ulDiscarded = document.querySelectorAll('ul')[2];
           
            ulDiscarded.append(li);

            sendBtn.remove();
            discardBtn.remove();
        }
    }
}