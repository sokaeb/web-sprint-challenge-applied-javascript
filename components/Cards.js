// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardContainer = document.querySelector('.cards-container');
function cardMaker(articleObj) {
    // creating elements 
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');
    // setting class names 
    card.classList.add('card');
    headline.classList.add('headline');
    authorDiv.classList.add('author');
    imgCont.classList.add('img-container');
    // setting attributes
    img.src = articleObj.authorPhoto;
    // setting text content 
    headline.textContent = articleObj.headline;
    authorName.textContent = `By: ${articleObj.authorName}`;
    // creating hierarchy
    card.appendChild(headline);
    card.appendChild(authorDiv);
    authorDiv.appendChild(imgCont);
    authorDiv.appendChild(authorName);
    imgCont.appendChild(img);
    // setting click events
    card.addEventListener('click', (event) => {
        console.log(articleObj.headline);
    })
    return card;
}

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => { 
        const articleTopics = Object.values(response.data.articles);
        articleTopics.forEach(topic => {
        topic.forEach(item => {
        const articleName = cardMaker(item);
        cardContainer.appendChild(articleName)
        })
    })
})
    .catch(error => {
        error = console.log('error');
        // console.log('Error: ', error.message); // an error would appear a message 
})