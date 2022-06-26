import './style.css'
import html from './index.html'
import homeContent from './content/home.md'
import historyContent from './content/history.md'
import processContent from '../README.md'

// Insert index.html into div and add to body.  This creates the main structure of the page.
function component(content)
{
    const element = document.createElement('div');
    element.classList.add('container')
    element.innerHTML = content;

    return element;
}

document.body.appendChild(component(html));

//  Get "main-article" element, create a function to insert HTML into an element, and insert homeContent into it.
const mainArticle = document.getElementById('main-article')

function insertContent(element, content)
{
    element.innerHTML = content;
}

insertContent(mainArticle, homeContent)

// Get link ids in top nav and add onclicks to switch between pages
const homeLink = document.getElementById('homeLink')
const historyLink = document.getElementById('historyLink')
const processLink = document.getElementById('processLink')

function createLink(link, element, content)
{
    link.addEventListener('click', () => insertContent(element, content))
}

createLink(homeLink, mainArticle, homeContent);
createLink(historyLink, mainArticle, historyContent);
createLink(processLink, mainArticle, processContent);
