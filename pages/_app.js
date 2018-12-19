import App, {Container} from 'next/app';
import PageContainer from '../components/common/PageContainer';
import '../styles/global.scss';
import withApolloConfig from './../components/apollo/withApolloConfig';
import {ApolloProvider} from 'react-apollo';

class LibraryApp extends App {
  render() {

    const {Component, apollo, pageProps} = this.props;
    return (
        <Container>
          <ApolloProvider client={apollo}>
            <PageContainer>
              <Component {...pageProps}/>
            </PageContainer>
          </ApolloProvider>
        </Container>
    );
  }
}

export default withApolloConfig(LibraryApp);
