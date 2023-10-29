import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

var rootDomElement = document.getElementById('root');

var root = ReactDOM.createRoot(rootDomElement);

// const h1 = React.createElement('h1', { id: 'test' }, 'Hello from JSX!');
// const h2 = React.createElement('h2', { className: "heading-h2" }, 'This is heading 2.')

// const header = React.createElement('header', { className: 'site-header' }, h1, h2);

var headerJSX = React.createElement(
    'header',
    { className: 'site-header' },
    React.createElement(
        'nav',
        { className: 'site-nav' },
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                'Home'
            ),
            React.createElement(
                'li',
                null,
                'Contacts'
            ),
            React.createElement(
                'li',
                null,
                'About'
            )
        )
    )
);

root.render(headerJSX);