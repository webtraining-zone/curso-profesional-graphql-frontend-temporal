import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';

const createApolloClient = ({headers}) => {
  return new ApolloClient({
    uri: `http://localhost:4000`,
    request: (operation) => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });
};

export default withApollo(createApolloClient);
