import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap'
import '../App.css'
import { ShelvesEnum } from '../api/myreadsConfig';

class Book extends Component {

    updateShelf(newShelfId) {
        if (this.props.updateShelf) {
            this.props.updateShelf(newShelfId, this.props.book);
        }
    }

    render() {

        const { book } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.thumbnail }}></div>
                    <div className="book-shelf-changer">
                        <Dropdown >
                            <Dropdown.Toggle variant="success" id="dropdown-basic" />
                            <Dropdown.Menu>
                                <Dropdown.Item disabled>Move to...</Dropdown.Item>
                                <Dropdown.Divider />
                                {book.shelfId === ShelvesEnum.CURRENTLYREADING ?
                                    (
                                        <Dropdown.Item eventKey="1"
                                            active
                                            onClick={() => { this.updateShelf(ShelvesEnum.CURRENTLYREADING) }}
                                        >{ShelvesEnum.properties[ShelvesEnum.CURRENTLYREADING].title}</Dropdown.Item>

                                    ) : (
                                        <Dropdown.Item eventKey="1"
                                            onClick={() => { this.updateShelf(ShelvesEnum.CURRENTLYREADING) }}
                                        >{ShelvesEnum.properties[ShelvesEnum.CURRENTLYREADING].title}</Dropdown.Item>

                                    )}

                                {book.shelfId === ShelvesEnum.WANTTOREAD ?
                                    (
                                        <Dropdown.Item eventKey="2"
                                            active
                                            onClick={() => { this.updateShelf(ShelvesEnum.WANTTOREAD) }}
                                        >{ShelvesEnum.properties[ShelvesEnum.WANTTOREAD].title}</Dropdown.Item>

                                    ) : (
                                        <Dropdown.Item eventKey="2"
                                            onClick={() => { this.updateShelf(ShelvesEnum.WANTTOREAD) }}
                                        >{ShelvesEnum.properties[ShelvesEnum.WANTTOREAD].title}</Dropdown.Item>
                                    )}

                                {book.shelfId === ShelvesEnum.READ ?
                                    (
                                        <Dropdown.Item eventKey="3"
                                            active
                                            onClick={() => { this.updateShelf(ShelvesEnum.READ) }}
                                        >{ShelvesEnum.properties[ShelvesEnum.READ].title}</Dropdown.Item>

                                    ) : (
                                        <Dropdown.Item eventKey="3"
                                            onClick={() => { this.updateShelf(ShelvesEnum.READ) }}
                                        >{ShelvesEnum.properties[ShelvesEnum.READ].title}</Dropdown.Item>

                                    )}

                                {book.shelfId === ShelvesEnum.NONE ?
                                    (
                                        <Dropdown.Item eventKey="4"
                                            active
                                            onClick={() => { this.updateShelf(ShelvesEnum.NONE) }}
                                        >{ShelvesEnum.properties[ShelvesEnum.NONE].title}</Dropdown.Item>

                                    ) : (
                                        <Dropdown.Item eventKey="4"
                                            onClick={() => { this.updateShelf(ShelvesEnum.NONE) }}
                                        >{ShelvesEnum.properties[ShelvesEnum.NONE].title}</Dropdown.Item>
                                    )}

                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        )
    }
}

export default Book;
