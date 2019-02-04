
export const ShelvesEnum = {
    HOME: 0,
    CURRENTLYREADING: 1,
    WANTTOREAD: 2,
    READ: 3,
    NONE: 4,
    properties: {
        0: { title: "Home", path: '/' },
        1: { title: "Currently Reading", path: '/current' },
        2: { title: "Want to Read", path: '/want' },
        3: { title: "Read", path: '/read' },
        4: { title: "None", path: '/none' },
    }
};
export const UsedAPI = {
    src: "BooksAPI",        // source for the books is BooksAPI
    //src: "MockBooks",        // source for the books is MockBooks 
    maxResults: 10,          // number of max books results on search API call
};

export const Shelves = [
    { shelfId: 1, shelf: "currentlyReading" },
    { shelfId: 2, shelf: "wantToRead" },
    { shelfId: 3, shelf: "read" },
    { shelfId: 4, shelf: "none" },
];