import React from 'react';
import ReactDOM from 'react-dom';
 import style from './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


const title = React.createElement(
    'h1',
    {id: 'titleId', class: 'titleClass', style: style},
    'This is my first REACT APP'
)

ReactDOM.render(
    title,
    document.querySelector('#root'),
)