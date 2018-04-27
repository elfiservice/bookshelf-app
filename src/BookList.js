import React, { Component } from 'react';


class BookList extends Component {

    render() {
        const { shelfName } = this.props;
        const { listOfBooks } = this.props;


        return (
            
            <div className="booklist-container"> 
                
                {listOfBooks.filter((book) => book.shelf === shelfName.key)
                    .map( book => (
                        <article key={book.id}>
                            {book.title}    
                        </article>
                ))}
            </div>
        )
    }
}

export default BookList;