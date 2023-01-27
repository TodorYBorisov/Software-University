function extractText() {
    // const colectItems = document.querySelectorAll('ul li');
    // const result = document.getElementById('result');

    // for (const node of colectItems) {
    //     result.value += node.textContent + '\n';
    // }

    const ulElements = document.getElementById('items');
    const textArea = document.getElementById('result');
    textArea.value = ulElements.textContent;
}