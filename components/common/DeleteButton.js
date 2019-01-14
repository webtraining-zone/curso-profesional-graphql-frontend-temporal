import React from 'react';
import {Mutation} from 'react-apollo';
import {DELETE_BOOK_MUTATION, ALL_BOOKS_QUERY} from '../../queries/booksQueries';

class DeleteButton extends React.Component {

  updateCache = (cache, payload) => {
    // 1. Leer la caché actual
    const data = cache.readQuery({query: ALL_BOOKS_QUERY});

    // 2. Quitar el libro recientemente eliminado
    data.books = data.books.filter(book => book.id !== payload.data.deleteBook.id);

    // 3. Re-escribir la caché
    cache.writeQuery({query: ALL_BOOKS_QUERY});
  };

  render() {
    return (
        <Mutation mutation={DELETE_BOOK_MUTATION}
                  variables={{id: this.props.id}}
                  update={this.updateCache}
        >
          {(deleteBook, {error, loading}) => (
              <button className={'btn btn-danger'}
                      onClick={() => {
                        if (confirm('Are you sure you want to delete this book?')) {
                          deleteBook();
                        }
                      }}>
                {this.props.children}
              </button>
          )}
        </Mutation>
    );
  }
}

export default DeleteButton;
