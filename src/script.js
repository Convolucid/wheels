import './style.css'
import html from './index.html'
import practicePathHeroImage from './assets/svg/practicePath.svg?raw'
import homeContent from './content/home.md'
import historyContent from './content/history.md'
import processContent from '../README.md'


// Insert index.html into div and add to body.  This creates the main structure of the page.
function component(content, classType)
{
    const element = document.createElement('div');
    element.classList.add(classType)
    element.innerHTML = content;

    return element;
}

document.body.appendChild(component(html, 'container'));

//  Get "main-article" element, create a function to insert HTML into an element, and insert homeContent into it.
const mainHeroImage = document.getElementById('main-hero-image')
const mainHeroText = document.getElementById('main-hero-text')
const mainArticle = document.getElementById('main-article')

function insertContent(element, content)
{
    element.innerHTML = content;
}

// New function structure


function displayHomePage(){
    insertContent(mainHeroImage, practicePathHeroImage);
    mainHeroText.textContent = 'a path on which to practice';
    insertContent(mainArticle, homeContent);
    mainArticle.style.margin = '-30vw auto 0';
}

function displayHistoryPage(){
    insertContent(mainHeroImage, '');
    insertContent(mainHeroText, '');
    insertContent(mainArticle, historyContent);
    mainArticle.style.margin = '0 auto';
}

function displayProcessPage(){
    insertContent(mainHeroImage, '');
    insertContent(mainHeroText, '');
    insertContent(mainArticle, processContent);
    mainArticle.style.margin = '0 auto';
}


displayHomePage();


// Get link ids in top nav and add onclicks to switch between pages
const homeLink = document.getElementById('homeLink')
const historyLink = document.getElementById('historyLink')
const processLink = document.getElementById('processLink')

function createLink(link, displayFunction)
{
    link.addEventListener('click', displayFunction)
}

createLink(homeLink, displayHomePage);
createLink(historyLink, displayHistoryPage);
createLink(processLink, displayProcessPage);

