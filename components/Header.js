// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('.header-container')
function Header() {
    // creating the elements
    const headerDiv = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');
    // adding classes to the elements
    headerDiv.className = 'header';
    date.className = 'date';
    temp.className = 'temp';
    // adding text content to the elements
    date.textContent = 'MARCH 28, 2020';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';
    // creating hierarchy 
    headerDiv.appendChild(date);
    headerDiv.appendChild(title);
    headerDiv.appendChild(temp);
    
    return headerDiv;
}
const theHeader = Header();
headerContainer.appendChild(theHeader);