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
        <h1>My Bookshelf</h1>
        <Shelves  shelvesNames={this.shelves}/>
      </div>
    );
  }
}

export default BookshelfApp;
