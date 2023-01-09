import styles from "./Board.module.scss";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./Card/Card";
import members from "./members.json";

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
        <div className={styles.cardArea}>
          <Card
            name={"김와플"}
            githubId={"wafflekime"}
            positions={["안드로이드"]}
            generation={17.5}
            introduction={
              "한줄소개 한줄소개 소개asdfasdf 두줄일수도asdfsadfadsfsdaf"
            }
            instagram={""}
            facebook={""}
            web={""}
            admin={true}
          />
          <Card
            name={"김와플"}
            githubId={"wafflekime"}
            positions={["안드로이드"]}
            generation={17.5}
            introduction={
              "한줄소개 한줄소개 소개asdfasdf 두줄일수도asdfsadfadsfsdaf"
            }
            instagram={""}
            facebook={""}
            web={""}
            admin={true}
          />
          <Card
            name={"김와플"}
            githubId={"wafflekime"}
            positions={["안드로이드"]}
            generation={17.5}
            introduction={
              "한줄소개 한줄소개 소개asdfasdf 두줄일수도asdfsadfadsfsdaf"
            }
            instagram={""}
            facebook={""}
            web={""}
            admin={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
