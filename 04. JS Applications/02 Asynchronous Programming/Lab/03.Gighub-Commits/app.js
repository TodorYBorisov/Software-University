function loadCommits() {

    let username = document.getElementById('username').value;
    let repository = document.getElementById('repo').value;
    let output = document.getElementById('commits');
    
    const url = `https://api.github.com/repos/${username}/${repository}/commits`;
    
    
    fetch(url).then((response) => {
        
        if (response.ok === false) {
            throw new Error(`Error: ${response.status} (Not Found)`);
        }
        return response.json();
        
        
    }).then((data) => {
        output.innerHTML = '';
        
        for (let entry of data) {

            let li = document.createElement('li');
            li.textContent = `${entry.commit.author.name}: ${entry.commit.message}`;
            output.appendChild(li);
        }

    }).catch((error) => {
        let li = document.createElement('li');
        li.textContent = `${error.message}`;
        output.appendChild(li);
    });
};