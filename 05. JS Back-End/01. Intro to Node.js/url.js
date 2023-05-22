const querystring = require('querystring');

const myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string&year=2023#hash'); 
const soft = new URL('https://softuni.bg/search/results?SearchTerm=JS+Back-End+-+%D1%8F%D0%BD%D1%83%D0%B0%D1%80%D0%B8+2023&FastTrackAndCourseInstances=true&Seminars=true&Users=true&LectureResources=true');


const qs = querystring.parse(myURL.search);

console.log(qs);
console.log(soft);