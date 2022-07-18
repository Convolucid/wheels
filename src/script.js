import './style.css'
import html from './index.html'

import navMenuButtonStack from './assets/svg/menuListStack.svg?raw'
import navMenuButtonWheelX from './assets/svg/menuListWheelX.svg?raw'
import homeHeroImage from './assets/svg/practicePath.svg?raw'
import homeContentImage from './assets/svg/practicePath2.svg?raw'
import iconContainerImage from './assets/svg/practicePath3.svg?raw'

import homeContent from './content/home.md'
import historyContent from './content/history.md'
import processContent from './content/process.md'
import futureContent from './content/future.md'

import processContent1 from './content/process/process.1-setup.md'
import processContent2 from './content/process/process.2-packages.md'
import processContent3 from './content/process/process.3-content.md'
import processContent4 from './content/process/process.4-style.md'


function component(htmlStructure)
{
    const element = document.createElement('div')
    element.classList.add('container')
    element.innerHTML = htmlStructure

    return element;
}

document.body.appendChild( component(html) );

// Get HTML elements by id
const body = document.querySelector('body')
const mainHero = document.getElementById('main-hero')
const mainContent = document.getElementById('main-content')
const iconContainer = document.getElementById('main-iconContainer')

const navList = document.getElementById('nav-list')
const navMenuButton = document.getElementById('nav-list-button')
const homeLink = document.getElementById('link-home')
const historyLink = document.getElementById('link-history')
const processLink = document.getElementById('link-process')
const futureLink = document.getElementById('link-future')

const homeArticle = document.getElementById('home-article')
const historyArticle = document.getElementById('history-article')
const processArticle = document.getElementById('process-article')
const futureArticle = document.getElementById('future-article')

// Insert svg images and content into appropriate elements and create page array
navMenuButton.innerHTML = navMenuButtonStack;
mainHero.insertAdjacentHTML('afterbegin', homeHeroImage);
mainContent.insertAdjacentHTML('afterbegin', homeContentImage);
iconContainer.insertAdjacentHTML('afterbegin', iconContainerImage);

homeArticle.innerHTML = homeContent;
historyArticle.innerHTML = historyContent;
processArticle.innerHTML = processContent;
futureArticle.innerHTML = futureContent;

const articleArray = [
    homeArticle,
    historyArticle,
    processArticle,
    futureArticle
]

const processArticleSection1 = document.getElementById('process-article-1')
const processArticleSection2 = document.getElementById('process-article-2')
const processArticleSection3 = document.getElementById('process-article-3')
const processArticleSection4 = document.getElementById('process-article-4')

processArticleSection1.innerHTML = processContent1;
processArticleSection2.innerHTML = processContent2;
processArticleSection3.innerHTML = processContent3;
processArticleSection4.innerHTML = processContent4;

const processArticleSectionArray = [
    processArticleSection1,
    processArticleSection2,
    processArticleSection3,
    processArticleSection4
]


// Navigation functions: page display function that displays a page of the array and hides other pages, and menu button switches.  
function displayContent(content, contentArray)
{
    for(let i=0; i < contentArray.length; i++)
    {
        if(contentArray[i] == content)
        {
            contentArray[i].style.display = 'block';
        }
        else
        {
            contentArray[i].style.display = 'none';
        }
    }
    resize();
}

function expandMenu()
{
    navList.removeAttribute('class')
    navList.classList.add('nav-list')
    navList.classList.add('nav-list-expand');
}

function collapseMenu()
{
    navList.removeAttribute('class')
    navList.classList.add('nav-list')
    navList.classList.add('nav-list-collapse')
    body.style.overflow = 'auto'
    navMenuButton.innerHTML = navMenuButtonStack;
}

function toggleMenuOverlay()
{
    if(navList.classList.contains('nav-list-collapse'))
    {
        navList.classList.add('nav-list-overlay')
        navList.classList.remove('nav-list-collapse')
        body.style.overflow = 'hidden'
        navMenuButton.innerHTML = navMenuButtonWheelX;
    }
    else
    {
        collapseMenu();
    }
}

// Resize function to toggle top menu
function resize()
{
    if(window.innerWidth >= 768)
    {
        expandMenu()
    }
    else
    {
        collapseMenu()
    }
}
resize();

// Event listeners for links and menu button functionality
window.addEventListener('resize', resize)

homeLink.addEventListener('click', ()=> {
    displayContent(homeArticle, articleArray)
})
historyLink.addEventListener('click', ()=> {
    displayContent(historyArticle, articleArray)
})
processLink.addEventListener('click', ()=> {
    displayContent(processArticle, articleArray)
})
futureLink.addEventListener('click', ()=> {
    displayContent(futureArticle, articleArray)
})

navMenuButton.addEventListener('click', toggleMenuOverlay)

// Process page sections
displayContent(processArticleSection1, processArticleSectionArray);