import Head from "next/head";
import { Inter } from "next/font/google";
import Login from "./login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Three 60</title>
        <meta name="description" content="Welcome to Three60" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/three60.png" />
      </Head>
      <Login />
    </>
  );
}
