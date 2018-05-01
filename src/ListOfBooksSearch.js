import React, { Component } from 'react';
import Book from './Book';

class ListOfBooksSearch extends Component {
    render() {
        const { listOfBooks } = this.props;
        let list;
        console.log(listOfBooks);
        if(listOfBooks === undefined || listOfBooks.error) {
            list = [];
        } else {
            list = listOfBooks;
        }
        
        
        return(
            <section className="container">
                <div className="content">
                    {list.map( book => (
                            <article className="book" key={book.id}>
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