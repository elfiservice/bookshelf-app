import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import BookshelfApp from './BookshelfApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter><BookshelfApp /></BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();
