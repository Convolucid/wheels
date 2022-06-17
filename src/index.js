import './style.css'

console.log('initialization successful');

function component() {
    const element = document.createElement('div');
    
    element.innerHTML = 'Hello world!';

    return element;
}

document.body.appendChild(component());