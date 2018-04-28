import React, { Component } from 'react';


class BookList extends Component {

    render() {
        const { shelfName, listOfBooks } = this.props;

        return (
            
            <div className="booklist-container"> 
                
                {listOfBooks.filter((book) => book.shelf === shelfName.key)
                    .map( book => (
                        <article className="book-container" key={book.id}>
                            <h3>{book.title}</h3>
                        </article>
                ))}
            </div>
        )
    }
}

export default BookList;