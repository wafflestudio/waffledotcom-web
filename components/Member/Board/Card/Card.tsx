import styles from "./Card.module.scss";
import Image from "next/image";

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
          <span className={styles.badge}>{generation}기</span>
          {admin ? <span className={styles.badge}>운영팀</span> : null}
          {positions.map((position) => (
            <span key={position} className={styles.badge}>
              {position}
            </span>
          ))}
        </div>
        <div className={styles.nameContainer}>
          <span className={styles.name}>{name}</span>
          <Image
            src={"/static/images/img.png"}
            width={"27px"}
            height={"27px"}
          />
          <span className={styles.waffleNumber}>111</span>
        </div>
        <div className={styles.introduction}>{introduction}</div>
      </div>
    </div>
  );
};

export default Card;
