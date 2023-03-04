async function loadCommits() {

    let username = document.getElementById('username').value;
    let repository = document.getElementById('repo').value;
    let output = document.getElementById('commits');
    output.innerHTML = '';
    
    const url = `https://api.github.com/repos/${username}/${repository}/commits`;
    try {
        
        let response = await fetch(url);
        
        if (response.ok === false) {
            throw new Error(`Error: ${response.status} (Not Found)`);
        }
        
        let data = await response.json();

        console.log(data);
        
        for (let entry of data) {

            let li = document.createElement('li');
            li.textContent = `${entry.commit.author.name}: ${entry.commit.message}`;
            output.appendChild(li);
        }

    } catch (error) {
        let li = document.createElement('li');
        li.textContent = `${error.message}`;
        output.appendChild(li);
    }
}