import Image from "next/image";
import CustomScrollbarDiv from "../CustomScrollbarDiv/CustomScrollbarDiv";
import styles from "./Card.module.scss";

export type MemberType = {
  name: string;
  githubId: string;
  position: string[];
  generation?: number;
  introduction?: string;
  instagram: string;
  facebook: string;
  web: string;
  admin: boolean;
};
type CardProps = {
  member: MemberType;
};

function Card({
  member: { name, position, generation, introduction, admin = false },
}: CardProps) {
  return (
    <div className={styles.container}>
      <span className={styles.profileImage}></span>
      <div className={styles.profileInformation}>
        <div className={styles.badgeContainer}>
          <span className={styles.badge} style={{ backgroundColor: "#6E6E6E" }}>
            {generation ?? 17.5}기
          </span>
          {admin ? (
            <span
              className={styles.badge}
              style={{ backgroundColor: "#464646" }}
            >
              운영팀
            </span>
          ) : null}
          {position.map((posItem) => (
            <span
              key={posItem}
              className={styles.badge}
              style={{
                backgroundColor:
                  posItem === "안드로이드"
                    ? "#AECA5E"
                    : posItem === "iOS"
                    ? "#D95959"
                    : posItem === "프론트엔드"
                    ? "#67C2E9"
                    : posItem === "백엔드"
                    ? "#E39955"
                    : posItem === "디자이너"
                    ? "#B573C0"
                    : "#464646",
              }}
            >
              {posItem}
            </span>
          ))}
        </div>
        <div className={styles.nameContainer}>
          <span className={styles.name}>{name}</span>
          <Image
            src={"/static/images/HeyWaffle.png"}
            alt={"Hey Waffle"}
            width={"27"}
            height={"27"}
          />
          <span className={styles.waffleNumber}>111</span>
        </div>
        <CustomScrollbarDiv
          className={styles.introduction}
          trackStyle={{ width: 4, left: 4 }}
          thumbStyle={{
            width: 5,
            backgroundColor: "#F0975E",
          }}
          // thumbHeight={9}
        >
          {introduction}
        </CustomScrollbarDiv>
      </div>
      <div className={styles.snsArea}>
        <Image
          src={"/static/images/GithubSymbol.png"}
          alt={"Github"}
          width={"47"}
          height={"47"}
        />
        <hr />
        <Image
          src={"/static/images/InstagramSymbol.png"}
          alt={"Instagram"}
          width={"47"}
          height={"47"}
        />
      </div>
    </div>
  );
}

export default Card;
