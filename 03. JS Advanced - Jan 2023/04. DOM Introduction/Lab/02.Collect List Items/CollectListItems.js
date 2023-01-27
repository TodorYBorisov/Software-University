function extractText() {
    // const colectItems = document.querySelectorAll('ul li');
    // const result = document.getElementById('result');

    // for (const node of colectItems) {
    //     result.value += node.textContent + '\n';
    // }

    const list = document.getElementById('items');
    const items = Array.from(list.children);
    const result = items.map((li) => li.textContent).join('\n');
    const textArea = document.getElementById('result');
    textArea.value = result;
}