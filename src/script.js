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

const homeArticle = document.getElementById('home-article')
const historyArticle = document.getElementById('history-article')
const processArticle = document.getElementById('process-article')


// Insert svg images and content into appropriate elements and create page array
navMenuButton.innerHTML = navMenuButtonStack;
mainHero.insertAdjacentHTML('afterbegin', homeHeroImage);
mainContent.insertAdjacentHTML('afterbegin', homeContentImage);
iconContainer.insertAdjacentHTML('afterbegin', iconContainerImage);

homeArticle.innerHTML = homeContent;
historyArticle.innerHTML = historyContent;
processArticle.innerHTML = processContent;

const articleArray = [
    homeArticle,
    historyArticle,
    processArticle
]


// Navigation functions: page display function that displays a page of the array and hides other pages, and menu button switches.  
function displayArticle(article)
{
    for(let i=0; i < articleArray.length; i++)
    {
        if(articleArray[i] == article)
        {
            // Want to try height changing percentage instead of block and none, for transitions
            articleArray[i].style.display = 'block';
        }
        else
        {
            articleArray[i].style.display = 'none';
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
    displayArticle(homeArticle)
})
historyLink.addEventListener('click', ()=> {
    displayArticle(historyArticle)
})
processLink.addEventListener('click', ()=> {
    displayArticle(processArticle)
})

navMenuButton.addEventListener('click', toggleMenuOverlay)