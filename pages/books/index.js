import React from 'react';
import Router from 'next/router';
import {Query} from 'react-apollo';
import {ALL_BOOKS_QUERY} from '../../queries/booksQueries';
import DeleteButton from '../../components/common/DeleteButton';

class BooksIndex extends React.Component {

  navigateToDetail = (event, book) => {
    event.preventDefault();

    Router.push(`/books/detail?id=${book.id}`);
  };

  render() {
    return (
        <div className={'container mt-3'}>
          <Query query={ALL_BOOKS_QUERY}>
            {({data, error, loading}) => {
              console.log(data);

              return (

                  <div className={'row'}>

                    <div className="col-12">
                      <h2>{data.books.length} found</h2>
                    </div>

                    {data.books.map(book => (
                        <div className="col-12 col-sm-4 col-md-2" key={book.id}>
                          <div className={'b-book mb-4'}>
                            {/*<h3>{book.title}</h3>*/}
                            <a onClick={(e) => this.navigateToDetail(e, book)} href={'#'}>
                              <img src={book.thumbnail} alt={book.title}
                                   className={'img-fluid'}/>
                            </a>

                            <DeleteButton id={book.id}>Delete</DeleteButton>
                          </div>
                        </div>
                    ))}

                  </div>
              );
            }}
          </Query>
        </div>
    );
  }
}

export default BooksIndex;
