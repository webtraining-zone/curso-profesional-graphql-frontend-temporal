import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const ALL_BOOKS_QUERY = gql`
    query ALL_BOOKS_QUERY {
        books {
            id
            title
        }
    }
`;

class BooksIndex extends React.Component {

  render() {
    return (
        <div>
          <Query query={ALL_BOOKS_QUERY}>
            {({data, error, loading}) => {
              console.log(data);

              return (
                  <div>
                    <h2>{data.books.length} found</h2>
                    {data.books.map(book => (
                        <div className={'b-book'} key={book.id}>
                          <h3>{book.title}</h3>
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
