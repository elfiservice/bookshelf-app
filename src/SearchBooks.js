import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import ListOfBooksSearch from './ListOfBooksSearch';

class SearchBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInputSearch: '',
            listOfBooksFound: []
        }
    }

    handleQuery(query) {       
        this.setState({
            valueInputSearch: query
        })
        setTimeout( () => this.searchBooks(query), 1000);      
    }

    searchBooks(query) {
        BooksAPI.search(query).then( books => {
            let listOfBooksFound;
            if(books === undefined || books.error) {
                listOfBooksFound = [];
            } else {
                listOfBooksFound = books;
            }
            this.setState({ listOfBooksFound: listOfBooksFound })         
        })
    }

    render() {
        const { valueInputSearch } = this.state;
        
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
                <ListOfBooksSearch listOfBooksFound={this.state.listOfBooksFound} />
            </main>
        )
    }
}

export default SearchBooks;