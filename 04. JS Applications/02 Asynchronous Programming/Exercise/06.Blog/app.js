function attachEvents() {

    let loadPostsBtn = document.getElementById('btnLoadPosts');
    let viewPostsBtn = document.getElementById('btnViewPost');

    loadPostsBtn.addEventListener('click', loadPosts);
    viewPostsBtn.addEventListener('click', showData);

    let posts = [];
    async function loadPosts() {

        try {
            let urlPosts = 'http://localhost:3030/jsonstore/blog/posts';
            let response = await fetch(urlPosts);
            if (response.status !== 200) {
                throw new Error('Data can not be fetched!');
            }
            let data = await response.json();

            console.log(data);
            for (const key in data) {

                let option = document.createElement('option');
                option.setAttribute('value', key);
                option.textContent = `${data[key].title}`;
                selectEl.appendChild(option);

                posts.push({ title: data[key].title, body: data[key].body });
            }

        } catch (error) {
            alert(error.message);
            throw error;
        }
    }
    let selectEl = document.getElementById('posts');

    async function showData() {

        try {
            let urlComments = 'http://localhost:3030/jsonstore/blog/comments';

            let response = await fetch(urlComments);
            if (response.status !== 200) {
                throw new Error('Data can not be fetched!');
            }
            let dataComents = await response.json();

            let comments = (Object.values(dataComents)).filter((el) => el.postId === selectEl.value);

            let postDetailsEl = document.getElementById('post-title');
            postDetailsEl.textContent = selectEl.selectedOptions[0].textContent;

            let po = posts.filter((p) => p.title === selectEl.selectedOptions[0].textContent);

            let pEl = document.getElementById('post-body');
            pEl.textContent = po[0].body;
            let ulEl = document.getElementById('post-comments');

            comments.forEach(comment => {

                let li = document.createElement('li');
                li.textContent = comment.text;
                ulEl.appendChild(li);
            });

        } catch (error) {
            alert(error.message);
            throw error;
        }
    }
}
attachEvents();