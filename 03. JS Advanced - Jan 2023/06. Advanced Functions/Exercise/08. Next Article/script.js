function getArticleGenerator(articles) {

    return function () {

        let div = document.getElementById('content');

        if (articles.length > 0) {

            let articleElement = document.createElement('article');
            articleElement.textContent = articles.shift();
            div.appendChild(articleElement);
        }
    };
}
