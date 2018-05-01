import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import ListOfBooksSearch from './ListOfBooksSearch';

class SearchBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInputSearch: '',
            listOfBooks: []
        }
    }

    handleQuery(query) {       
        this.setState({
            valueInputSearch: query
        })
        console.log(query);
        setTimeout( () => this.searchBooks(query), 1000);
        
    }

    searchBooks(query) {
        BooksAPI.search(query).then( books => {
            this.setState({ listOfBooks: books })         
        })
    }

    render() {
        const { valueInputSearch } = this.state;
        //console.log(this.state.listOfBooks);
        
        return (
            <main className="container">
                <section className="content search-books--content">
                    <input 
                        className="search-books--input" 
                        type="text" 
                        name="search" 
                        placeholder="search books.."
                        value={valueInputSearch}
                        onChange={(event) => this.handleQuery(event.target.value)}
                    />
                </section>
                <ListOfBooksSearch listOfBooks={this.state.listOfBooks} />
            </main>
        )
    }
}

export default SearchBooks;