import React, { Component } from 'react';
import Book from './Book';


class BookList extends Component {

    render() {
        const { shelfName, listOfBooks } = this.props;

        return (
            
            <div className="booklist-container"> 
                
                {listOfBooks.filter((book) => book.shelf === shelfName.key)
                    .map( book => (
                        <article className="book-container" key={book.id}>
                            <h3>{book.title}</h3>
                            <Book book={book} />
                        </article>
                        
                ))}
            </div>
        )
    }
}

export default BookList;