import styles from "./Board.module.scss";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./Card/Card";
import CustomScrollbarDiv from "./CustomScrollbarDiv/CustomScrollbarDiv";
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
        <CustomScrollbarDiv className={styles.cardArea}>
          <div className={styles.cardColumnWrapper}>
            <div className={styles.cardColumn}>
              {members
                .filter((_, idx) => idx % 2 === 0)
                .map((member) => (
                  <Card
                    key={member.name}
                    name={member.name}
                    githubId={member.githubId}
                    positions={member.position}
                    generation={17.5}
                    introduction={member.introduction}
                    instagram={member.instagram}
                    facebook={member.facebook}
                    web={member.web}
                    admin={member.admin}
                  />
                ))}
            </div>
            <div className={styles.cardColumn}>
              {members
                .filter((_, idx) => idx % 2 === 1)
                .map((member) => (
                  <Card
                    key={member.name}
                    name={member.name}
                    githubId={member.githubId}
                    positions={member.position}
                    generation={17.5}
                    introduction={member.introduction}
                    instagram={member.instagram}
                    facebook={member.facebook}
                    web={member.web}
                    admin={member.admin}
                  />
                ))}
            </div>
          </div>
        </CustomScrollbarDiv>
      </div>
    </div>
  );
};

export default Board;
