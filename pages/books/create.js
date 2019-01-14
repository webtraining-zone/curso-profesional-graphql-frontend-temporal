import React from 'react';
import Router from 'next/router';
import {CREATE_BOOK_MUTATION} from '../../queries/booksQueries';
import {Mutation} from 'react-apollo';

class CreateBookPage extends React.Component {
  state = {
    title: 'This is a book',
    description: 'This is a description :)',
    thumbnail: 'http://graphql-backend.webtraining.fun/images/javascript-design-patterns.jpg',
    image: 'http://graphql-backend.webtraining.fun/images/javascript-design-patterns.jpg',
  };

  handleOnChange = (event) => {
    const {name, value} = event.target;

    console.log(name, value);
    console.log(this.state);
    this.setState({[name]: value});
  };

  redirectToBooksPage = () => {
    Router.push({
      pathname: '/books',
    });
  };

  render() {
    return (
        <div className={'container mt-3'}>
          <div className={'row'}>

            <div className="col-12 col-sm-6 col-md-5">

              <Mutation mutation={CREATE_BOOK_MUTATION} variables={this.state}>
                {(createBook, {loading, error}) => (
                    <div>
                      {error && <p>Error please try again</p>}

                      <form onSubmit={async (event) => {
                        event.preventDefault();

                        const response = await createBook();
                        console.log(response);

                        this.redirectToBooksPage();

                      }}>

                        <div className="form-group">
                          <label htmlFor="title">Title</label>
                          <input type="text" className="form-control" id="title" name="title"
                                 placeholder="Enter title" defaultValue={this.state.title}
                                 onChange={this.handleOnChange}/>
                        </div>

                        <div className="form-group">
                          <label htmlFor="description">Description</label>
                          <textarea rows="8" className="form-control" id="description" name="description"
                                    placeholder="Enter description"
                                    defaultValue={this.state.description}
                                    onChange={this.handleOnChange}/>
                        </div>

                        <button type={'submit'} className={'btn btn-primary'}>Submit</button>

                      </form>

                    </div>
                )}
              </Mutation>


            </div>

          </div>
        </div>
    );
  }
}

export default CreateBookPage;
