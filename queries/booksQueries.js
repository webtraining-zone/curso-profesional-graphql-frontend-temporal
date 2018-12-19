import gql from 'graphql-tag';

export const ALL_BOOKS_QUERY = gql`
    query ALL_BOOKS_QUERY {
        books {
            id
            title
            thumbnail
        }
    }
`;
