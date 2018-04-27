import React, { Component } from 'react';
import BookList from './BookList';
import * as BooksAPI from './BooksAPI';

class Shelves extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfBooks: ''
        }
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ listOfBooks: books });
        });     
    }

    render() {
        const shelvesNames = this.props.shelvesNames;
        console.log(this.state.listOfBooks);
        
        return (
            <main>
            {shelvesNames.map( (shelf, index) => (
               <section className="shelf-container" key={index}>
                   <h2>{shelf}</h2>
                   <div className="shelf-book-list">
                        <BookList shelfName={shelf} />
                   </div>
               </section> 
            ))}
        </main>
        )
    }
}

export default Shelves;