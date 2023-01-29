function toggle() {

    let buttonElement = document.getElementsByClassName('button')[0];
    let text = document.getElementById('extra');

    if (buttonElement.textContent === 'More') {
        buttonElement.textContent = 'Less';
        text.style.display = 'block';

    } else if (buttonElement.textContent === 'Less') {
        buttonElement.textContent = 'More';
        text.style.display = 'none';
    }
}