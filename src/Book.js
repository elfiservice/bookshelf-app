import React, { Component } from 'react';

class Book extends Component {

    render() {
        const book = this.props.book;
        const onChangeShelf = this.props.changeShelf;
        return (
            <div className="book-content">
                <div className="book-select-container">
                <img src={book.imageLinks.thumbnail} alt={book.title + " book"} />
                    <svg className="book-select-icon"> </svg>
                    <select className="book-select-content" defaultValue={book.shelf} onChange={(e) => onChangeShelf(book, e.target.value)}>
                        <option disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want To Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Book;