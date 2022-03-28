// import App from 'next/app'
import { useEffect } from 'react';
import Layout from '../components/Layout';
import '../app.scss';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    console.log(
      '\n',
      ' __    __   _______  __       __        ______    __ \n',
      '|  |  |  | |   ____||  |     |  |      /  __  \\  |  | \n',
      '|  |__|  | |  |__   |  |     |  |     |  |  |  | |  | \n',
      '|   __   | |   __|  |  |     |  |     |  |  |  | |  | \n',
      "|  |  |  | |  |____ |  `----.|  `----.|  `--'  | |__| \n",
      '|__|  |__| |_______||_______||_______| \\______/  (__) \n \n',
      'Thanks for checking out my website. You can view the \n',
      'source code here: http://www.github.com/canfie1d/ryancanfield.me-2022 \n',
      'or contact me here ryancanfield@me.com \n \n'
    );

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
           function (registration) {
             console.log("Service Worker registration successful with scope: ", registration.scope);
           },
           function (err) {
             console.log("Service Worker registration failed: ", err);
           }
         );
       });

    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
