import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

/**
 * Import Components
 */
import Header from './components/Header';
import BookList from './components/BookList';
import SearchBooks from './components/SearchBooks';
import { mockBooks } from './api/MockBooks';
import * as BooksAPI from './api/BooksAPI';
import { ShelvesEnum, UsedAPI, Shelves } from './api/myreadsConfig';

/**
 * Class App: Main Component, which is used as top component of this Webapp.
 */
class App extends Component {


  state = {
    books: [],
  }

  getShelfId = (shelf) => {

    const shelvesThere = Shelves.filter((c) => {
      return (c.shelf === shelf)
    })
    if (shelvesThere.length === 1) {
      return shelvesThere[0].shelfId;
    }
    else {
      return ShelvesEnum.NONE;
    }
  }

  getShelf = (shelfId) => {

    const shelvesThere = Shelves.filter((c) => {
      return (c.shelfId === shelfId)
    })
    if (shelvesThere.length === 1) {
      return shelvesThere[0].shelf;
    }
    else {
      return shelvesThere[3].shelf;
    }
  }

  addBookToShelf = (newShelfId, book) => {

    const bookThere = this.state.books.filter((c) => {
      return (c.id === book.id)
    })
    if (bookThere.length === 0) {
      book.shelfId = newShelfId;
      this.setState((currentState) => ({
        books: currentState.books.concat([book])
      }));
    }
    else {
      this.setState((currentState) => ({
        books: currentState.books.filter((c) => {
          if (c.id === book.id) {
            c.shelfId = newShelfId;
          }
          return c;
        })
      })
      )
    }
  }

  updateShelf = (newShelfId, book) => {

    this.addBookToShelf(newShelfId, book);

    // Using BooksAPI
    if (UsedAPI.src === "BooksAPI") {
      book.shelf = this.getShelf(newShelfId);
      BooksAPI.update(book, book.shelf)
        .then((result) => {
          //console.log(result);
        })
    }

  }

  /**
  * Event componentDidMount: is called , if this component allocated first time.
  */
  componentDidMount() {

    this._isMounted = true;

    if (UsedAPI.src === "MockBooks") {
      // Read all books from Mock API 
      this.setState(() => ({
        books: mockBooks
      }))
    }
    else {
      // Read all books from Udacity API
      BooksAPI.getAll()
        .then((results) => {
          let allBooks = results.map((result) => (
            {
              "shelfId": this.getShelfId(result.shelf),
              "shelf": result.shelf,
              "id": result.id,
              "title": result.title,
              "authors": result.authors,
              "thumbnail": `url(${result.imageLinks.thumbnail})`
            }
          ));
          this.setState(() => ({
            books: allBooks
          }))

        })
    }
  }

  /**
  * Event componentWillUnmount: is called , if this component is unmounted 
  */
  componentWillUnmount() {
    this._isMounted = false;
  }

  constructor(props) {
    super(props);
    this._isMounted = false;
  }

  render() {

    return (
      <div className="App">
        <div className="list-books">
          <Header />
          <Route exact path={ShelvesEnum.properties[ShelvesEnum.HOME].path}
            render={() => (
              <BookList
                updateShelf={(newShelfId, book) => {
                  this._isMounted && this.updateShelf(newShelfId, book)
                }}
                books={this.state.books}
              />
            )} />
          <Route className="open-search" exact path='/search' render={({ history }) => (
            <SearchBooks
              updateShelf={(newShelfId, book) => {
                this._isMounted && this.updateShelf(newShelfId, book)
                history.push('/')
              }}
              books={this.state.books}
            />
          )} />
          <div className="open-search">
            <Link className='close-search' to='/search'>Search</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;