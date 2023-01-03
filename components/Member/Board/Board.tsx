import styles from "./Board.module.scss";
import Sidebar from "./Sidebar/Sidebar";

const Board = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <hr />
      <p>
        현재까지 <strong>999</strong> 명이 와플스튜디오와 함께했습니다
      </p>
      <hr />
    </div>
    <div className={styles.board}>
      <Sidebar></Sidebar>
    </div>
  </div>
);

export default Board;
