import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';

import {withBookstoreService} from '../hoc';
import {fetchBooks, bookAddedToCart} from '../../actions';
import {compose} from '../../utils';

import './book-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({books, addedToCart}) => {

    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem
                            addedToCart={() => addedToCart(book.id)}
                            book={book}/></li>
                    )
                })
            }
        </ul>
    );
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error, addedToCart} = this.props;

        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <ErrorIndicator/>
        }

        return <BookList
            addedToCart = {addedToCart}
            books = {books} />
    }
}

const mapStateToProps = ({bookList:{books, loading, error}}) => {
    return {books, loading, error};
};

const mapDispatchToProps = (dispatch, ownProps) => {

    const {bookstoreService} = ownProps;
    return {
        fetchBooks: fetchBooks(dispatch, bookstoreService),
        addedToCart: (id) => dispatch(bookAddedToCart(id))
    }

};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
