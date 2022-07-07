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

// Get all HTML elements by id
const mainHero = document.getElementById('main-hero')
const mainContent = document.getElementById('main-content')
const homeArticle = document.getElementById('home-article')
const historyArticle = document.getElementById('history-article')
const processArticle = document.getElementById('process-article')

mainHero.insertAdjacentHTML('afterbegin', homePageHeroImage);
mainContent.insertAdjacentHTML('afterbegin', homePageContentImage);
homeArticle.innerHTML = homeContent;
historyArticle.innerHTML = historyContent;
processArticle.innerHTML = processContent;

