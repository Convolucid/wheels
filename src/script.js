import './style.css'
import html from './index.html'

console.log('initialization successful');

function component(content) {
    const element = document.createElement('div');
    
    element.innerHTML = content;

    return element;
}

document.body.appendChild(component(html))
document.body.appendChild(component('Hello Cheshire Cat!'))