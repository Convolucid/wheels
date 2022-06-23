import './style.css'
import html from './index.html'
import homeHtml from './content/home.html'
import historyHtml from './content/history.html'
import processMarkdown from '../README.md'

// Insert index.html into div and add to body.
function component(content) 
{
    const element = document.createElement('div');
    element.innerHTML = content;

    return element;
}

document.body.appendChild(component(html))


// Get HTML elements and insert content into each.
const homePage = document.getElementById('home');
const historyPage = document.getElementById('history');
const processPage = document.getElementById('process');

function insertContent(element, content) 
{
    element.innerHTML = content;
}

insertContent(homePage, homeHtml)
insertContent(historyPage, historyHtml)
insertContent(processPage, processMarkdown)


// Create an array of each page and function to switch between pages through style.display.  Then display Home by default.
const pageArray = [
    homePage,
    historyPage,
    processPage
]

function displayElement(element, elementArray)
{
    for (let i=0; i < elementArray.length; i++)
    {
        if(element == elementArray[i])
        {
            elementArray[i].style.display = 'block';
        }
        else
        {
            elementArray[i].style.display = 'none';
        }
    }
}

displayElement(homePage, pageArray);

// Get link ids in top nav and add onclicks to switch between pages
const homeLink = document.getElementById('homeLink');
const historyLink = document.getElementById('historyLink');
const processLink= document.getElementById('processLink');

const linkArray = [
    homeLink,
    historyLink,
    processLink
]

historyLink.addEventListener('click', () => displayElement(historyPage, pageArray))

for(let i=0; i < linkArray.length; i++)
{
    linkArray[i].addEventListener('click', () => displayElement(pageArray[i], pageArray))
}


