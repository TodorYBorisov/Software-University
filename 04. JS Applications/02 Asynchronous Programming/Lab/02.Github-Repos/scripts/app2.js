async function loadRepos() {

    let output = document.getElementById('repos');
    let username = document.getElementById('username').value;
    const url = `https://api.github.com/users/${username}/repos`;

    try {
        const response = await fetch(url);

        if (response.ok == false) {
            
            throw new Error(`${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        output.innerHTML = '';
        
        for (let entry of data) {
            let li = document.createElement('li');
            li.innerHTML = (`<a href='${entry.html_url}'> ${entry.full_name}</a>`);
            output.appendChild(li);
        }

    } catch (error) {

        output.innerHTML = `<p>${error}</p>`;
    }
}
