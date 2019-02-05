import { ShelvesEnum, Shelves } from './myreadsConfig';

export const getShelfIdByShelf = (shelf) => {

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

export const getShelfIdByBookId = (books, bookId) => {

    const bookThere = books.filter((c) => {
        return (c.id === bookId)
    })
    if (bookThere.length === 1) {
        return bookThere[0].shelfId;
    }
    else {
        return ShelvesEnum.NONE;
    }
}

export const getShelf = (shelfId) => {

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

export const filterWithThumbnail = (results) => {

    let filteredBooks = results.filter((c) => {
        return (c.imageLinks !== undefined)
    })
    return filteredBooks;
}

export const mapAllBooks = (results) => {

    let allBooks = filterWithThumbnail(results).map((result) => (
        {
            "shelfId": getShelfIdByShelf(result.shelf),
            "shelf": result.shelf,
            "id": result.id,
            "title": result.title,
            "authors": result.authors,
            "thumbnail": result.imageLinks.thumbnail
        }
    ));
    return allBooks;
}

export const mapSearchedBooks = (books, results) => {

    let searchdedBooks = filterWithThumbnail(results).map((result) =>
        (
            {
                "shelfId": getShelfIdByBookId(books, result.id),
                "shelf": result.shelf,
                "id": result.id,
                "title": result.title,
                "authors": result.authors,
                "thumbnail": result.imageLinks.thumbnail,
            }

        )
    );
    return searchdedBooks;
}
