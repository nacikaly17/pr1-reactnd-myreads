import React from 'react';
import PropTypes from 'prop-types';
import '../App.css'
import Book from './Book';
import { ShelvesEnum } from '../api/myreadsConfig';

const getShelfBooks = (props, shelfId) => {
    const shelveBooks = shelfId === ShelvesEnum.ALLBOOKS
        ? props.books
        : props.books.filter((c) => (
            c.shelfId === shelfId
        ));
    return shelveBooks;
}

function BookList(props) {

    const { updateShelf } = props;

    const currentBooks = getShelfBooks(props, ShelvesEnum.CURRENTLYREADING);
    const wantBooks = getShelfBooks(props, ShelvesEnum.WANTTOREAD);
    const readBooks = getShelfBooks(props, ShelvesEnum.READ);

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

BookList.propTypes = {
    books: PropTypes.array.isRequired,
}

export default BookList;