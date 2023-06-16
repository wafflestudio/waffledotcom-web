import Head from "next/head";
import Snutt from "../../components/Service/Snutt/Snutt";
import Snuboard from "../../components/Service/Snuboard/Snuboard";
import Cover from "../../components/Home/Cover/Cover";
import Siksha from "../../components/Service/Siksha/Siksha";
import styles from "./Service.module.scss";

function Service() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WaffleStudio</title>
        <meta
          name="description"
          content="맛있는 서비스가 탄생하는 곳 와플스튜디오"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cover />
      <Snutt />
      <Siksha />
      <Snuboard />
    </div>
  );
}

export default Service;
