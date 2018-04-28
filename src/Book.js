import React, { Component } from 'react';

class Book extends Component {
    render() {
        const book = this.props.book;
        return (
            <div className="book-content">
                <img src={book.imageLinks.thumbnail} alt={book.title + " book"} />
            </div>
        )
    }
}

export default Book;