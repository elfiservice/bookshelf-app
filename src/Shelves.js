import React, { Component } from 'react';
import BookList from './BookList';

class Shelves extends Component {

    render() {
        const shelvesNames = this.props.shelvesNames;
        return (
            <main>
            {shelvesNames.map( (shelf, index) => (
               <section className="shelf-container" key={index}>
                   <h2>{shelf}</h2>
                   <div className="shelf-book-list">
                        <BookList />
                   </div>
               </section> 
            ))}
        </main>
        )
    }
}

export default Shelves;