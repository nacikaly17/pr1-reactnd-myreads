# MyReads Project

#### Udacity React Nanodegree program
This project is connected to the _React Nanodegree Program_ course by **Udacity**.

In this project, you'll create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## Environment
This program requires **node.js** and **npm** program envirenment 
Go to [Node.js](https://nodejs.org/en/download/) downloads page and install it if it's not installed yet.

## Install
Clone  project files from [GitHub](https://github.com/nacikaly17/pr1-reactnd-myreads.git) .
First create a local working directory and then get the project files:
```
          Clone:
$ git clone https://github.com/nacikaly17/pr1-reactnd-myreads.git
          Change to project directory:
$ cd pr1-reactnd-myreads
```
## Available Scripts

After cloning the project files you will find in the project directory the scripts:  You can run:

* install all project dependencies with `npm install`
* start the development server with `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The collection of available search terms.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico     # React Icon,
│   └── index.html      # extended with bootstrap stylesheet
│   └── manifest.json    # JSON file Nneded by some browser.
└── src
    ├── App.css # Styles for the app. 
    ├── App.js # This is the root  React component of the app. 
    ├── App.test.js # Used for testing. Provided with Create React App. 
    ├── index.css # Global styles. 
    └── index.js # DOM rendering only. Set the main react "App" component inside body tag of HTML with the id='root'
└── src
    ├── api # Files for the data source api . APIs local and Udacity backend server. 
    │   ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    │   ├── MockBooks.js # A JavaScript API for testing without Udacicty backend
    │   └── myreacdsConfig.js  #  Configuration of the app . 
└── src
    ├── components # Contains React UI components.
    │   ├── Book.js         #  React component for a single Book
    │   ├── BookList.js     #  React component for list of books
    │   └── Header.js       #  React component for the header of app
    │   └── SearchBooks.js  #  React component for the Search page of the app
└── src
    ├── icons # Helpful images for the app. 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
```
## Backend Server

To simplify this development process, Udacity provided a backend server for us to develop against. The provided file [`BooksAPI.js`](src/api/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


