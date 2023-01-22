function fromJSONtoHTMLtable(input) {

    let table = [];

    table.push('<table>');

    let data = JSON.parse(input);

    let headings = Object.keys(data[0]);

    let tableHeadings = '   <tr>';

    for (let key of headings) {

        tableHeadings += '<th>' + escapeHtml(key) + '</th>';
    }
    tableHeadings += '</tr>';

    table.push(tableHeadings);

    for (let i = 0; i < data.length; i++) {
        let tableRows = '   <tr>';
        for (let j = 0; j < headings.length; j++) {
            let value = data[i][headings[j]];
            tableRows += '<td>' + escapeHtml(value) + '</td>';
        }
        tableRows += '</tr>';

        table.push(tableRows);
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

console.log(fromJSONtoHTMLtable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
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
// }