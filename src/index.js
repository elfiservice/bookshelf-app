import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BookshelfApp from './BookshelfApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BookshelfApp />, 
    document.getElementById('root')
);
registerServiceWorker();
