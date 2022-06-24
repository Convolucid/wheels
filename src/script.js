import './style.css'
import html from './index.html'
import homeContent from './content/home.md'
import historyContent from './content/history.md'
import processContent from '../README.md'

// Insert index.html into div and add to body.  This creates the main structure of the page.
function component(content)
{
    const element = document.createElement('div');
    element.innerHTML = content;

    return element;
}

document.body.appendChild(component(html));

//  Get HTML elements and insert content into each of them.  Future versions of this might simply have one element and switch the content and styles out accordingly.
const homePage = document.getElementById('home')
const historyPage = document.getElementById('history')
const processPage = document.getElementById('process')

function insertContent(element, content)
{
    element.innerHTML = content;
}

insertContent(homePage, homeContent)
insertContent(historyPage, historyContent)
insertContent(processPage, processContent)

// Create an array of each page and a function to switch between pages using style.display.  Display "Home" by default.  Future versions will create a more elaborate switching function with animated styling.
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
const homeLink = document.getElementById('homeLink')
const historyLink = document.getElementById('historyLink')
const processLink = document.getElementById('processLink')

const linkArray = [
    homeLink,
    historyLink,
    processLink
]

for(let i=0; i < linkArray.length; i++)
{
    linkArray[i].addEventListener('click', () => displayElement(pageArray[i], pageArray))
}