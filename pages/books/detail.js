import React from 'react';
import Router from 'next/router';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const ONE_BOOK_QUERY = gql`
    query ONE_BOOK_QUERY($id: ID!) {
        book(where: {
            id: $id
        }) {
            id
            title
            description
            image
        }
    }
`;

class BookDetail extends React.Component {

  // OJO: esto parte del ciclio de las páginas de Next.js
  static async getInitialProps({query}) {
    return {
      id: query.id,
    };
  }

  goBack() {
    Router.back();
  }

  render() {

    const {id} = this.props;

    if (!id) {
      return (
          <div className={'container mt-3'}>
            <div className={'alert alert-danger'}>No id</div>
          </div>
      );
    }

    return (
        <div className={'container mt-3'}>

          <a href="#" onClick={this.goBack} className={'btn btn-secondary mt-3 mb-3'}>
            Go back
          </a>

          <Query query={ONE_BOOK_QUERY}
                 variables={{id: id}}>
            {({data, error, loading}) => {
              console.log();
              const {book} = data;

              return (

                  <div className={'row'}>

                    <div className="col-4 col-sm-4 col-md-3">
                      <img src={book.image} alt={book.title}
                           className={'img-fluid'}/>
                    </div>

                    <div className="col-8 col-sm-8 col-md-9">
                      <h1>{book.title}</h1>

                      <p>
                        {book.description}
                      </p>

                    </div>

                  </div>
              );
            }}
          </Query>
        </div>
    );
  }
}

export default BookDetail;
