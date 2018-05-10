import React, { Component } from 'react';
import { shelvesList } from './constants';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './BookshelfApp.css';
import Shelves from './Shelves';
import SearchBooks from './SearchBooks';

class BookshelfApp extends Component {
  constructor(props) {
      super(props);
      this.bookCount = 0;
      this.shelves = shelvesList;
      this.state = {
        listOfBooks: []
    }
    this.changeShelf = this.changeShelf.bind(this);
  }

  componentDidMount() {
    this.fetchMyBookshelf();
  }

  componentWillUpdate(nextProps, prevState) {
    if(this.bookCount !== this.state.listOfBooks.length || this.state.listOfBooks.length === 0) {
      this.fetchMyBookshelf();
    }      
  }

  fetchMyBookshelf() {
    BooksAPI.getAll().then(books => {
      this.bookCount = books.length;
      this.setState({ listOfBooks: books });
    }); 
  }

  changeShelf(book, shelf) {
      alert('You change the ' + book.title + " book to " + shelf + " shelf!");
      BooksAPI.update(book, shelf).then(data => {
          let listOfBooks = this.state.listOfBooks;
          let bookIsNew = true;
          for(let i = 0; i < listOfBooks.length; i++) {
            if(listOfBooks[i].id === book.id) {
                listOfBooks[i].shelf = shelf;
                bookIsNew = false;
                if(shelf === 'none') this.bookCount--;
                this.setState({ listOfBooks: listOfBooks })                    
              }
          }
          if(bookIsNew) {
            //listOfBooks.push(book);
            this.bookCount++;
          }      
      });   
  }

  render() {
    return (
      <div className="App">
        <div className="container main-header">
          <header className="content">
            <h1 className="text-center">My Bookshelf</h1>
          </header>
        </div>
        <Route exact path={'/'} render={() => (
          <Shelves  
            shelvesNames={this.shelves}
            listOfBooks={this.state.listOfBooks}
            onChangeShelf={this.changeShelf} 
          />
        )} />

        <Route path="/search" render={() => (
          <SearchBooks 
            onChangeShelf={this.changeShelf}
            listOfBooks={this.state.listOfBooks}
          />
        )} />
      </div>
    );
  }
}

export default BookshelfApp;
