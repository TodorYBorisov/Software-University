function extract(content) {

    let p = document.getElementById('content').textContent;
    
    let pattern = /\(([^)]+)\)/gm;

    let match = pattern.exec(p);

    let result = [];
    while (match) {

        result.push(match[1]);

        match = pattern.exec(p);
    }

    return result.join(', ');
}