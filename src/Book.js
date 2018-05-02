import React, { Component } from 'react';
import noImage from './no-image.png';

class Book extends Component {

    render() {
        const book = this.props.book;
        const onChangeShelf = this.props.changeShelf;
        return (
            <div className="book-content">
                <img src={(book.imageLinks ? book.imageLinks.thumbnail : noImage)} alt={book.title + " book"} />
                <div className="book-select-container">
                
                    <svg className="book-select-icon"> </svg>
                    <select className="book-select-content" defaultValue={book.shelf} onChange={(e) => onChangeShelf(book, e.target.value)}>
                        <option disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want To Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                <h3>{book.title}</h3>
                {<p>{(book.authors ? book.authors[0] : '')}</p>}
            </div>
        )
    }
}

export default Book;