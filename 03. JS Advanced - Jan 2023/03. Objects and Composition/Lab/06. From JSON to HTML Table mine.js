function fromJSONtoHTMLtable(dataAsJson) {
    let table = [];
    table.push('<table>');
    const data = JSON.parse(dataAsJson);
    const headings = Object.keys(data[0]);

    let header = '   <tr>';
    for (let key of headings) {
        header += `<th>${escapeHtml(key)}</th>`;
    }
    header += '</tr>';
    table.push(header);

    for (let line of data) {
        let results = Object.values(line);
        let temp = '   <tr>';
        for (let value of results) {
            temp += `<td>${escapeHtml(value)}</td>`;
        }
        temp += '</tr>';
        table.push(temp);
    }
    table.push('</table>');

    return table.join('\n');

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

// console.log(fromJSONtoHTMLtable(`[{"Name":"Stamat",
// "Score":5.5},
// {"Name":"Rumen",
// "Score":6}]`
// ));
console.log(fromJSONtoHTMLtable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
));

// function escapeHtml(str) {
//     // html escape from Underscore.js https://coderwall.com/p/ostduq/escape-html-with-javascript
//     let entityMap = {
//         '&': '&amp;',
//         '<': '&lt;',
//         '>': '&gt;',
//         '"': '&quot;',
//         '\'': '&#39;',
//         '/': '&#x2F;'
//     };
//     return str.replace(/[&<>"'\/]/g, (s) => entityMap[s]);
// };