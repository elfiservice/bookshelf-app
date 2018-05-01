import React, { Component } from 'react';

class SearchBooks extends Component {
    render() {
        return (
            <main className="container">
                <section className="content search-books--content">
                    <input className="search-books--input" type="text" name="search" placeholder="Search.." />
                </section>
            </main>
        )
    }
}

export default SearchBooks;