import Board from "../../components/Member/Board/Board";
import Header from "../../components/common/Header/Header";
import styles from "./Member.module.scss";

function Member() {
  return (
    <div className={styles.container}>
      <Header />
      <Board />
    </div>
  );
}

export default Member;
