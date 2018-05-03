import React, { Component } from 'react';
import Book from './Book';

class ListOfBooksSearch extends Component {
    render() {
        const { listOfBooksFound, onChangeShelf } = this.props;
        //console.log(listOfBooksFound);
        
        return(
            <section className="container list-of-books-found">
                <div className="content flex-box">
                    {listOfBooksFound.map( book => (
                            <article className="book-container" key={book.id}>
                                <Book book={book} changeShelf={onChangeShelf} />
                            </article>
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default ListOfBooksSearch;