import './style.css'

console.log('initialization successful');

function component() {
    const element = document.createElement('div');
    
    element.innerHTML = 'Hello Alice!';

    return element;
}

document.body.appendChild(component());