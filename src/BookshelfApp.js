import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './BookshelfApp.css';
import Shelves from './Shelves';
import SearchBooks from './SearchBooks';

class BookshelfApp extends Component {
    constructor(props) {
        super(props);
        this.shelves = [
            { key: 'currentlyReading', name: 'Currently Reading'},
            { key: 'wantToRead', name: 'Want To Read'},
            { key: 'read', name: 'Read'}
        ]

        
    }
  render() {
    return (
      <div className="App">
        <div className="container main-header">
          <header className="content">
            <h1 className="text-center">My Bookshelf</h1>
          </header>
        </div>
        <Route exact path="/" render={() => (
          <Shelves  shelvesNames={this.shelves}/>
        )} />

        <Route path="/search" component={SearchBooks} />
      </div>
    );
  }
}

export default BookshelfApp;
