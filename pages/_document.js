import Document, {Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
        <html>
        <Head>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
                integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"
                crossOrigin="anonymous"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
        </html>
    );
  }
}

export default MyDocument;
