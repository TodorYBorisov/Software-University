let button = document.querySelector('#load');
button.addEventListener('click', loadRepos);

// function loadRepos() {

// let url = 'https://api.github.com/users/testnakov/repos';
// const httpRequest = new XMLHttpRequest();

// httpRequest.addEventListener('readystatechange', function () {
//    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
//       document.getElementById('res').textContent = httpRequest.responseText;
//    }
// });
// httpRequest.open('GET', url);
// httpRequest.send();
// };

function loadRepos() {

   const url = 'https://api.github.com/users/testnakov/repos';

   fetch(url)//това ни връща промис да ни върне заглавния ред и хедърите
      .then((response) => response.json())//това ни е съксес колбек функцията които държи заглавния и хедърите
      .then((data) => {
         document.getElementById('res').textContent = data;
      })
      .catch((error) => console.error(error));
}

// function loadRepos() {

//    let url = 'https://api.github.com/users/testnakov/repos';

//    let request = fetch(url);

//    request.then(resposeHandler);

// };

// function resposeHandler(response) {
//    console.log('received headers');
//    const dataPromise = response.json();
//    dataPromise.then(dataHandler);
// };
// function dataHandler(data) {
//    console.log('received data');
//    document.getElementById('res').textContent = JSON.stringify(data);
// };