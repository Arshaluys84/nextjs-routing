import Head from "next/head";
import Layout from "../components/Layout/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>NextJS App</title>
        <meta name="decription" content="Next JS App of events" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
