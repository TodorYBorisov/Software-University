function postData() {

    const url = 'http://localhost:3030/jsonstore/collections/books';

    const data = {
        author: 'Toshko',
        title: 'TEST'
    };

    const options = {
        method: 'post',
        headers: { 'Content-type': 'applications/json' },
        body: JSON.stringify(data)
    };

    return fetch(url, options);
}