import './style.css'
import html from './index.html'

import homeContent from './content/home.md'
import historyContent from './content/history.md'
import processContent from './content/process.md'

import homeHeroImage from './assets/svg/practicePath.svg?raw'
import homeContentImage from './assets/svg/practicePath2.svg?raw'
import navMenuButtonStack from './assets/svg/menuListStack.svg?raw'
import navMenuButtonWheelX from './assets/svg/menuListWheelX.svg?raw'


// Component function creates a div, adds a container class, and inserts html argument into it.  Then the div is and added to document body.  This creates the main structure of the page.
function component(htmlStructure)
{
    const element = document.createElement('div');
    element.classList.add('container')
    element.innerHTML = htmlStructure;

    return element;
}

document.body.appendChild( component(html) );

// Get HTML elements by id
const body = document.querySelector('body');
const mainHero = document.getElementById('main-hero')
const mainContent = document.getElementById('main-content')

const homeArticle = document.getElementById('home-article')
const historyArticle = document.getElementById('history-article')
const processArticle = document.getElementById('process-article')

const navList = document.getElementById('nav-list')
const homeLink = document.getElementById('link-home')
const historyLink = document.getElementById('link-history')
const processLink = document.getElementById('link-process')
const navMenuButton = document.getElementById('nav-list-button')

// Insert svg images and content into appropriate elements and create page array
mainHero.insertAdjacentHTML('afterbegin', homeHeroImage);
mainContent.insertAdjacentHTML('afterbegin', homeContentImage);
homeArticle.innerHTML = homeContent;
historyArticle.innerHTML = historyContent;
processArticle.innerHTML = processContent;

const articleArray = [
    homeArticle,
    historyArticle,
    processArticle
]

// Page display function that displays a page of the array and hides other pages
function displayArticle(article) 
{
    for(let i=0; i < articleArray.length; i++) 
    {
        if(articleArray[i] == article)
        {
            articleArray[i].style.display = 'block';
        }
        else
        {
            articleArray[i].style.display = 'none';
        }
    }
}

// Get link ids in top nav and add onclicks to switch between pages
homeLink.addEventListener( 'click', () => {displayArticle(homeArticle)} )
historyLink.addEventListener( 'click', () => {displayArticle(historyArticle)} )
processLink.addEventListener( 'click', () => {displayArticle(processArticle)} )


// Menu button functionality
navMenuButton.innerHTML = navMenuButtonStack;

function expandMenu()
{
    navList.removeAttribute('class')
    navList.classList.add('nav-list')
    navList.classList.add('nav-list-expand')
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
        navList.classList.remove('nav-list-collapse')
        navList.classList.add('nav-list-overlay')
        body.style.overflow = 'hidden'
        navMenuButton.innerHTML = navMenuButtonWheelX;
    }
    else
    {
        collapseMenu();
    }
}

navMenuButton.addEventListener( 'click', toggleMenuOverlay )

// Create resize function to toggle top menu
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
window.addEventListener('resize', resize)