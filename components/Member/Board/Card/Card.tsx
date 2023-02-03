import styles from "./Card.module.scss";
import Image from "next/image";
import CustomScrollbarDiv from "../CustomScrollbarDiv/CustomScrollbarDiv";

type cardProps = {
  name: string;
  githubId: string;
  positions: string[];
  generation: number;
  introduction: string;
  instagram: string;
  facebook: string;
  web: string;
  admin: boolean;
};

const Card = ({
  name,
  githubId,
  positions,
  generation,
  introduction = "",
  instagram = "",
  facebook = "",
  web = "",
  admin = false,
}: cardProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.profileImage}></span>
      <div className={styles.profileInformation}>
        <div className={styles.badgeContainer}>
          <span className={styles.badge} style={{ backgroundColor: "#6E6E6E" }}>
            {generation}기
          </span>
          {admin ? (
            <span
              className={styles.badge}
              style={{ backgroundColor: "#464646" }}
            >
              운영팀
            </span>
          ) : null}
          {positions.map((position) => (
            <span
              key={position}
              className={styles.badge}
              style={{
                backgroundColor:
                  position === "안드로이드"
                    ? "#AECA5E"
                    : position === "iOS"
                    ? "#D95959"
                    : position === "프론트엔드"
                    ? "#67C2E9"
                    : position === "백엔드"
                    ? "#E39955"
                    : position === "디자이너"
                    ? "#B573C0"
                    : "#464646",
              }}
            >
              {position}
            </span>
          ))}
        </div>
        <div className={styles.nameContainer}>
          <span className={styles.name}>{name}</span>
          <Image
            src={"/static/images/HeyWaffle.png"}
            alt={"Hey Waffle"}
            width={"27px"}
            height={"27px"}
          />
          <span className={styles.waffleNumber}>111</span>
        </div>
        <CustomScrollbarDiv className={styles.introduction} thumbHeight={3}>
          {introduction}
        </CustomScrollbarDiv>
      </div>
      <div className={styles.snsArea}>
        <Image
          src={"/static/images/GithubSymbol.png"}
          alt={"Github"}
          width={"47px"}
          height={"47px"}
        />
        <hr />
        <Image
          src={"/static/images/InstagramSymbol.png"}
          alt={"Instagram"}
          width={"47px"}
          height={"47px"}
        />
      </div>
    </div>
  );
};

export default Card;
