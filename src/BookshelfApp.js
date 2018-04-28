import React, { Component } from 'react';
import './BookshelfApp.css';
import Shelves from './Shelves';

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
        <Shelves  shelvesNames={this.shelves}/>
      </div>
    );
  }
}

export default BookshelfApp;
