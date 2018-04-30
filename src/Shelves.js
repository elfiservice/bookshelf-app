import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';
import * as BooksAPI from './BooksAPI';

class Shelves extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfBooks: []
        }
        this.changeShelf = this.changeShelf.bind(this);
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ listOfBooks: books });
        });     
    }

    changeShelf(book, shelf) {
        alert('You change the ' + book.title + " book to " + shelf + " shelf!");
        BooksAPI.update(book, shelf).then(data => {
            this.componentDidMount();
        });   
    }

    render() {
        const shelvesNames = this.props.shelvesNames;
        console.log(this.state.listOfBooks);
        
        return (
            <main className="container shelves">
                <div className="content">
                    {shelvesNames.map( (shelf) => (
                    <section className="shelf-container" key={shelf.key}>
                        <h2>{shelf.name}</h2>
                            <BookList shelfName={shelf} listOfBooks={this.state.listOfBooks} onChangeShelf={this.changeShelf} />
                    </section> 
                    ))}
                </div>
                <Link to="/search" className="search-main-btn" > &#9532; </Link> 
            </main>
        )
    }
}

export default Shelves;