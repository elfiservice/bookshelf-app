import React, { Component } from 'react';
import Book from './Book';


class BookList extends Component {

    render() {
        const { shelfName, listOfBooks, onChangeShelf } = this.props;

        return (
            
            <div className="booklist-container flex-box"> 
                
                {listOfBooks.filter((book) => book.shelf === shelfName.key)
                    .map( book => (
                        <article className="book-container" key={book.id}>
                            <h3>{book.title}</h3>
                            <Book book={book} changeShelf={onChangeShelf} />
                        </article>
                        
                ))}
            </div>
        )
    }
}

export default BookList;