import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Profile from "./components/profile";


export default function Home() {
  return (
    <>
      <Head>
        <title>Profile Card Component</title>
        <meta name="description" content="created Profile Card Component app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Profile></Profile>

    </>
  );
}
