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
        this.bookshelfList = this.props.listOfBooks;
    }

    componentWillUpdate() {
        this.bookshelfList = this.props.listOfBooks;
    }

    handleQuery(query) {       
        this.setState({
            valueInputSearch: query
        })
        setTimeout( () => this.searchBooks(query), 500);      
    }

    searchBooks(query) {
        BooksAPI.search(query).then( books => {
            let listOfBooksFound;
            if(books === undefined || books.error) {
                listOfBooksFound = [];
            } else {
                listOfBooksFound = books;
            }
            //check the shelf for each book found with my booksShelf
            const bookshelfList = this.bookshelfList;
            for(let i = 0; i < listOfBooksFound.length; i++) {
                for(let j = 0; j < bookshelfList.length; j++) {
                    if(listOfBooksFound[i].id === bookshelfList[j].id) {
                        listOfBooksFound[i].shelf = bookshelfList[j].shelf;                        
                    } else if(!listOfBooksFound[i].shelf) {
                        listOfBooksFound[i].shelf = 'none';
                    }
                }
            }

            this.setState({ listOfBooksFound: listOfBooksFound })         
        })
    }

    render() {
        const { valueInputSearch } = this.state;
        const { onChangeShelf } = this.props;
        
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
                <ListOfBooksSearch listOfBooksFound={this.state.listOfBooksFound} onChangeShelf={onChangeShelf} />
            </main>
        )
    }
}

export default SearchBooks;