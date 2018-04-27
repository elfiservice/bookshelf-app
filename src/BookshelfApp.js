import React, { Component } from 'react';
import logo from './logo.svg';
import './BookshelfApp.css';
import Shelves from './Shelves';

class BookshelfApp extends Component {
    constructor(props) {
        super(props);
        this.shelves = [
            'currently reading',
            'want to read',
            'read'
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
