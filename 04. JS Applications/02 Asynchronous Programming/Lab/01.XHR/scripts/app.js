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

   let url = 'https://api.github.com/users/testnakov/repos';

   fetch(url)
      .then(responce => responce.json())
      .then(data => {
         document.getElementById('res').textContent = data;
      });
}