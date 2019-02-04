import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css'
import Book from './Book';
import { ShelvesEnum } from '../api/myreadsConfig';

class BookList extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    getShelfBooks = (shelfId) => {
        const shelveBooks = shelfId === ShelvesEnum.ALLBOOKS
            ? this.props.books
            : this.props.books.filter((c) => (
                c.shelfId === shelfId
            ));
        return shelveBooks;
    }

    render() {

        const { updateShelf } = this.props;

        const currentBooks = this.getShelfBooks(ShelvesEnum.CURRENTLYREADING);
        const wantBooks = this.getShelfBooks(ShelvesEnum.WANTTOREAD);
        const readBooks = this.getShelfBooks(ShelvesEnum.READ);

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ShelvesEnum.properties[ShelvesEnum.CURRENTLYREADING].title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {currentBooks.map((book) => (
                            <li key={book.id}>
                                <Book
                                    updateShelf={updateShelf}
                                    book={book}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
                <h2 className="bookshelf-title">{ShelvesEnum.properties[ShelvesEnum.WANTTOREAD].title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {wantBooks.map((book) => (
                            <li key={book.id}>
                                <Book
                                    updateShelf={updateShelf}
                                    book={book}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
                <h2 className="bookshelf-title">{ShelvesEnum.properties[ShelvesEnum.READ].title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {readBooks.map((book) => (
                            <li key={book.id}>
                                <Book
                                    updateShelf={updateShelf}
                                    book={book}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookList;