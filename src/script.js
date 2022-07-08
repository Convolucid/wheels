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
const mainHero = document.getElementById('main-hero')
const mainContent = document.getElementById('main-content')
const homeArticle = document.getElementById('home-article')
const historyArticle = document.getElementById('history-article')
const processArticle = document.getElementById('process-article')

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
const homeLink = document.getElementById('link-home')
const historyLink = document.getElementById('link-history')
const processLink = document.getElementById('link-process')

homeLink.addEventListener( 'click', () => {displayArticle(homeArticle)} )
historyLink.addEventListener( 'click', () => {displayArticle(historyArticle)} )
processLink.addEventListener( 'click', () => {displayArticle(processArticle)} )


// Menu button functionality
const navList = document.getElementById('nav-list')
const navMenuButton = document.getElementById('nav-list-button')
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
    navMenuButton.innerHTML = navMenuButtonStack;
}

function toggleMenuOverlay()
{
    if(navList.classList.contains('nav-list-collapse'))
    {
        navList.classList.remove('nav-list-collapse')
        navList.classList.add('nav-list-overlay')
        navMenuButton.innerHTML = navMenuButtonWheelX;
    }
    else
    {
        navList.classList.remove('nav-list-overlay')
        navList.classList.add('nav-list-collapse')
        navMenuButton.innerHTML = navMenuButtonStack;
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

window.addEventListener('resize', resize)