import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

var rootDomElement = document.getElementById('root');

var root = ReactDOM.createRoot(rootDomElement);

// const h1 = React.createElement('h1', { id: 'test' }, 'Hello from JSX!');
// const h2 = React.createElement('h2', { className: "heading-h2" }, 'This is heading 2.')

// const header = React.createElement('header', { className: 'site-header' }, h1, h2);


// const Footer = () => {
//     return React.createElement('div',
//         { className: 'site-footer' },
//         React.createElement('p', {}, '&copy; All rights reserved'),
//     );
// };

var Footer = function Footer() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            ' \xA9 All Rights Reserved.'
        )
    );
};

var headerJSX = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        { className: 'site-header' },
        'This is site with footer.'
    ),
    React.createElement(Footer, null)
);

root.render(headerJSX);