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