import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import '../App.css';
import * as BooksAPI from '../api/BooksAPI';
import { ShelvesEnum, UsedAPI } from '../api/myreadsConfig';
import Book from './Book';

class SearchBooks extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    state = {
        searchdedBooks: [],
        query: ''
    }

    updateQuery = (query) => {

        this.setState(() => ({
            query: query.trim()
        }));
    }

    getShelfId = (bookId) => {

        const bookThere = this.props.books.filter((c) => {
            return (c.id === bookId)
        })
        if (bookThere.length === 1) {
            return bookThere[0].shelfId;
        }
        else {
            return ShelvesEnum.NONE;
        }
    }

    searchBooks = () => {

        try {
            // Read all books from API
            BooksAPI.search(this.state.query, UsedAPI.maxResults)
                .then((results) => {
                    // console.log(JSON.stringify(results));
                    let searchdedBooks = results.map((searchedBook) => (
                        {
                            "shelfId": this.getShelfId(searchedBook.id),
                            "id": searchedBook.id,
                            "title": searchedBook.title,
                            "authors": searchedBook.authors,
                            "thumbnail": `url(${searchedBook.imageLinks.thumbnail})`
                        }
                    ));
                    if (this.state.query === '') {
                        this.setState(() => ({
                            searchdedBooks: []
                        }))
                    }
                    else {
                        this.setState(() => ({
                            searchdedBooks: searchdedBooks
                        }))
                    }

                });
        } catch (error) {
            console.log(error);
        }


    }

    render() {
        const { query } = this.state;
        const { updateShelf } = this.props;

        if (query !== '') {
            this.searchBooks();
        }
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <div className="books-grid">
                        {this.state.searchdedBooks.length === 0 ? (
                            <div className="search-books">
                                <h3>No search Result</h3>
                            </div>
                        ) : (
                                <ol className="books-grid">
                                    {this.state.searchdedBooks.map((book) => (
                                        <li key={book.id}>
                                            <Book
                                                updateShelf={updateShelf}
                                                book={book}
                                            />
                                        </li>
                                    ))}
                                </ol>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBooks