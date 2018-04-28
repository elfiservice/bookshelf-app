import React, { Component } from 'react';
import BookList from './BookList';
import * as BooksAPI from './BooksAPI';

class Shelves extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfBooks: []
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
            {shelvesNames.map( (shelf) => (
               <section className="shelf-container" key={shelf.key}>
                   <h2>{shelf.name}</h2>
                    <BookList shelfName={shelf} listOfBooks={this.state.listOfBooks} />
               </section> 
            ))}
        </main>
        )
    }
}

export default Shelves;