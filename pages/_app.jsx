import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
          />

          {/* FONT LINKS */}
          <link
            href="https://fonts.googleapis.com/css2?family=Rampart+One&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
}

export default MyApp;
