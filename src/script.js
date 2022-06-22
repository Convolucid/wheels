import './style.css'
import html from './index.html'
import homeHtml from './content/home.html'

console.log('initialization successful');

function component(content) 
{
    const element = document.createElement('div');
    
    element.innerHTML = content;

    return element;
}

function displayContent(elementId, content) 
{
    const element = document.getElementById(elementId);
    element.innerHTML = content;
}

document.body.appendChild(component(html))
displayContent('home', homeHtml)
