function attachEvents() {

    const nameAuthor = document.querySelector('input[name="author"]');
    const contentAuthor = document.querySelector('input[name="content"]');

    const sendBtn = document.getElementById('submit');
    sendBtn.addEventListener('click', submitData);

    async function submitData() {
       
        if (nameAuthor.value == '' || contentAuthor.value == '') {
            return;
        }

        let newObj = {
            author: nameAuthor.value.trim(),
            content: contentAuthor.value.trim()
        };

        const url = 'http://localhost:3030/jsonstore/messenger';
        const options = {
            method: 'post',
            headers: { 'Content-type': 'applications/json' },
            body: JSON.stringify(newObj)
        };
        try {
            const response = await fetch(url, options);
            
            if (response.ok == false) {
                throw new Error('Error');
            }
            const data = await response.json();

            return data;
            
        } catch (error) {
            alert(error.message);
            throw error;
        }  
    }

    let refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', loadData);

    async function loadData() {

        const url = 'http://localhost:3030/jsonstore/messenger';
        try {
            const response = await fetch(url);
            if (response.ok === false) {
                const error = await response.json();
                throw error;
            }

            const data = await response.json();
            const arr = Object.values(data);

            const area = document.getElementById('messages');

            let allComments = [];
            for (let line of arr) {
                allComments.push(`${line.author}: ${line.content}`);
                area.value = allComments.join('\n');
            }

        } catch (error) {
            alert(error.message);
        }
       
    }
}
attachEvents();