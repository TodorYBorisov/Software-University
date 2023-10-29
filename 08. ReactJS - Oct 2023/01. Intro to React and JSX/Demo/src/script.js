import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';


const rootDomElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootDomElement);

// const h1 = React.createElement('h1', { id: 'test' }, 'Hello from JSX!');
// const h2 = React.createElement('h2', { className: "heading-h2" }, 'This is heading 2.')

// const header = React.createElement('header', { className: 'site-header' }, h1, h2);


const Footer = () => {
    return React.createElement('div',
        { className: 'site-footer' },
        React.createElement('p', {}, '&copy; All rights reserved'),
    );
};

const headerJSX = (
    <div>
        <header>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </header>
        <Footer></Footer>
    </div>
);


root.render(headerJSX)