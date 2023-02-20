import styles from "./Board.module.scss";
import Sidebar from "./Sidebar/Sidebar";
import Card, { MemberType } from "./Card/Card";
import CustomScrollbarDiv from "./CustomScrollbarDiv/CustomScrollbarDiv";
import _members from "./members.json";

const members = _members as MemberType[];

const Board = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <hr />
        <p>
          현재까지 <strong>{members.length}</strong> 명이 와플스튜디오와
          함께했습니다
        </p>
        <hr />
      </div>
      <div className={styles.board}>
        <Sidebar></Sidebar>
        <CustomScrollbarDiv className={styles.cardArea}>
          <div className={styles.cardColumnWrapper}>
            <div className={styles.cardColumn}>
              {members
                .filter((_, idx) => idx % 2 === 0)
                .map((member) => (
                  <Card key={member.name} member={member} />
                ))}
            </div>
            <div className={styles.cardColumn}>
              {members
                .filter((_, idx) => idx % 2 === 1)
                .map((member) => (
                  <Card key={member.name} member={member} />
                ))}
            </div>
          </div>
        </CustomScrollbarDiv>
      </div>
    </div>
  );
};

export default Board;
