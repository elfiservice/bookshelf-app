import React, { Component } from 'react';


class BookList extends Component {

    render() {
        const shelfName = this.props.shelfName;
        return (
            
            <div> BookList in {shelfName} 
            </div>
        )
    }
}

export default BookList;