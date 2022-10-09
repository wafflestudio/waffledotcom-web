import styles from "./Background.module.scss";

const Background = () => (
  <div className={styles.container}>
    <CoverBackground />
  </div>
);

const CoverBackground = () => (
  <div className={styles.cover}>
    <div className={styles.fromLeft}>WAFFLE</div>
    <div className={styles.fromRight}>STUDIO</div>
    <div className={styles.fromLeft}>WAFFLE</div>
  </div>
);
export default Background;
