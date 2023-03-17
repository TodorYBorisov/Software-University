function createElement(type, attr, ...content) {

    const element = document.createElement(type);

    for (const item in attr) {
        if (item === 'class') {
            element.classList.add(attr[item]);
        } else if (item === 'disable') {
            element.disabled = attr[item];
        } else {
            element[item] = attr[item];
        }
    }

    for (let item of content) {
        if (typeof item === 'string' || typeof item === 'number') {
            item = document.createTextNode(item);
        }
        element.appendChild(item);
    }
    return element;
}

function createElement2(typeEl, content, parentEl, atributes) {
    const element = document.createElement(typeEl);
    element.textContent = content;

    if (atributes) {
        for (let atrr in atributes) {
            element.setAttribute(atrr, atributes[atrr]);
        }
    }
    parentEl.appendChild(element);
    return element;
}
