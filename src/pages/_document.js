import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8"/>
        <meta name="msapplication-config" content="none"/>
        <meta name="theme-color" content="#2f3634" />
        <link rel="shortcut icon" href="/favicon.png"/>
        <link rel="manifest" href="/manifest.json"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;
