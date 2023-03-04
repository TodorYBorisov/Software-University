function loadRepos() {

    let output = document.getElementById('repos');
    let username = document.getElementById('username').value;
    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url).then((response) => {

        if (response.ok == false) {
            // console.log('Encountered error: ', responce.status, responce.statusText);
            return Promise.reject(`${response.status}: ${response.statusText}`);
        } else {

            return response.json();
        }
    }).then((data) => {

        output.innerHTML = '';
        //output.replaceChildren(); това ще изтрие всичко вътре в ul
        for (let entry of data) {
            let li = document.createElement('li');
            li.innerHTML = (`<a href='${entry.html_url}'> ${entry.full_name}</a>`);
            output.appendChild(li);
        }
    }).catch((error) => {

        output.innerHTML = `<p>${error}</p>`;
    });

}