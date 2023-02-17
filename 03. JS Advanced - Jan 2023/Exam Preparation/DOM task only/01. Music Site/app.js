window.addEventListener('load', solve);

function solve() {

    let genreEl = document.getElementById('genre');
    let nameOfSongEl = document.getElementById('name');
    let authorEl = document.getElementById('author');
    let dateEl = document.getElementById('date');
    let addButtonEl = document.getElementById('add-btn');

    addButtonEl.addEventListener('click', addInfo);

    function addInfo(event) {
        event.preventDefault();

        let genre = genreEl.value;
        let nameOfSong = nameOfSongEl.value;
        let author = authorEl.value;
        let date = dateEl.value;
        
        if (genre === '' || nameOfSong === '' || author === '' || date === '') {
            return;
        }
        let divAllHitsEl = document.querySelector('.all-hits-container');

        let div = document.createElement('div');
        div.classList.add('hits-info');

        let imgEl = document.createElement('img');
        imgEl.src = './static/img/img.png';

        let h2Genre = document.createElement('h2');
        h2Genre.textContent = `Genre: ${genre}`;

        let h2Name = document.createElement('h2');
        h2Name.textContent = `Name: ${nameOfSong}`;

        let h2Author = document.createElement('h2');
        h2Author.textContent = `Author: ${author}`;

        let h3 = document.createElement('h3');
        h3.textContent = `Date: ${date}`;

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';

        let likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = 'Like song';

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';

        div.appendChild(imgEl);
        div.appendChild(h2Genre);
        div.appendChild(h2Name);
        div.appendChild(h2Author);
        div.appendChild(h3);
        div.appendChild(saveBtn);
        div.appendChild(likeBtn);
        div.appendChild(deleteBtn);

        divAllHitsEl.appendChild(div);

        genreEl.value = '';
        nameOfSongEl.value = '';
        authorEl.value = '';
        dateEl.value = '';

        likeBtn.addEventListener('click', like);

        function like() {
            let totalLikes = document.querySelector('.likes p');
            let actualLikes = totalLikes.textContent.slice(-1);
            actualLikes++;
            totalLikes.textContent = `Total Likes: ${(actualLikes)}`;
            likeBtn.disabled = true;

        }
        saveBtn.addEventListener('click', save);

        function save() {
            let divSaved = document.querySelector('.saved-container');
            divSaved.appendChild(div);

            likeBtn.remove();
            saveBtn.remove();
        }

        deleteBtn.addEventListener('click', deleteSong);

        function deleteSong() {
            div.remove();
        }
    }
}