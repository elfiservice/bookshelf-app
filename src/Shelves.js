import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';

class Shelves extends Component {

    render() {
        const { shelvesNames, listOfBooks, onChangeShelf } = this.props;
        
        return (
            <main className="container shelves">
                <div className="content">
                    {shelvesNames.map( (shelf) => (
                    <section className="shelf-container" key={shelf.key}>
                        <h2>{shelf.name}</h2>
                            <BookList shelfName={shelf} listOfBooks={listOfBooks} onChangeShelf={onChangeShelf} />
                    </section> 
                    ))}
                </div>
                <Link to="/search" className="nav-main-btn" > &#9532; </Link> 
            </main>
        )
    }
}

export default Shelves;