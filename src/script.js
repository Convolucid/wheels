import './style.css'
import html from './index.html'

import homeContent from './content/home.md'
import historyContent from './content/history.md'
import processContent from './content/process.md'

import homePageHeroImage from './assets/svg/practicePath.svg?raw'
import homePageContentImage from './assets/svg/practicePath2.svg?raw'


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
mainHero.insertAdjacentHTML('afterbegin', homePageHeroImage);
mainContent.insertAdjacentHTML('afterbegin', homePageContentImage);
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
const navMenuButton = document.getElementById('link-menu-button')
const navList = document.getElementById('nav-list')

function toggleMenu()
{
    if(window.getComputedStyle(navList).display == 'none')
    {
        navList.style.display = 'flex'
    }
    else
    {
        navList.style.display = 'none'
    }
}

navMenuButton.addEventListener( 'click', ()=> { toggleMenu() } )