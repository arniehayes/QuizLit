import "../styles/globals.css";
import Head from "next/head";
import React, { useState } from "react";

export const AddressContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const [difficulty, setDifficulty] = useState("medium");
  const [categoryType, setCategoryType] = useState("");
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
          {/* FAVICON */}
          <link rel="shortcut icon" href="/brain_32x.png" />
        </Head>
        <AddressContext.Provider 
          value={{difficulty, setDifficulty, categoryType, setCategoryType}}
        >
          <Component {...pageProps} />
        </AddressContext.Provider>
      </>
    );
}

export default MyApp;
