import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { NotificationContextProvider } from "../store/notificationContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>NextJS App</title>
          <meta name="decription" content="Next JS App of events" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
