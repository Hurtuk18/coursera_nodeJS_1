var xhr = new XMLHttpRequest();
var url = './news_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function () {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('news-articles');

    articles.forEach(function (article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var articleHeader = document.createElement('h3');
        articleHeader.textContent = 'Content:';

        // I will use only paragraph because I'm just telling the content of the article and for that is no need for a list
        var content = document.createElement('p');
        content.textContent = article.content;

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(articleHeader);
        articleDiv.appendChild(content);
        articlesDiv.appendChild(articleDiv);
    });
};

xhr.send();
