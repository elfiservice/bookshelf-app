import React, { Component } from 'react';
import Book from './Book';

class ListOfBooksSearch extends Component {
    render() {
        const { listOfBooksFound } = this.props;
        console.log(listOfBooksFound);
        
        return(
            <section className="container">
                <div className="content flex-box">
                    {listOfBooksFound.map( book => (
                            <article className="book-container" key={book.id}>
                                <Book book={book} />
                            </article>
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default ListOfBooksSearch;