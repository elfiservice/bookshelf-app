import React, { Component } from 'react';
import logo from './logo.svg';
import './BookshelfApp.css';

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
        My Bookshelf
        <main>
            {this.shelves.map( shelf => (
               <section>
                   <h2>{shelf}</h2>
               </section> 
            ))}
        </main>
      </div>
    );
  }
}

export default BookshelfApp;
