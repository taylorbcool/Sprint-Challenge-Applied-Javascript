// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        Object.values(response.data.articles).forEach((arr) => {
            arr.forEach((item) => {
                createArticle(item);
            });
        })
    })
    .catch((error) => {
        console.log('Could not fetch articles; ' + error);
    });

function createArticle(object) {
    const 
        articlesContainer = document.querySelector('.cards-container'),
        article = document.createElement('div'),
        articleHeadline = document.createElement('div'),
        articleAuthor = document.createElement('div'),
        authorImgContainer = document.createElement('div'),
        authorImg = document.createElement('img'),
        articleAuthorName = document.createElement('span');

    articleAuthorName.textContent = `By ${object.authorName}`;
    authorImg.src = object.authorPhoto;
    articleHeadline.textContent = object.headline;

    article.classList.add('card');
    articleHeadline.classList.add('headline');
    articleAuthor.classList.add('author');
    authorImgContainer.classList.add('img-container');

    articlesContainer.appendChild(article);
    article.appendChild(articleHeadline);
    article.appendChild(articleAuthor);
    articleAuthor.appendChild(authorImgContainer);
    articleAuthor.appendChild(articleAuthorName);
    authorImgContainer.appendChild(authorImg);

    return article;
}