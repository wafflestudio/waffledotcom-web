import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import styles from "./MemberCard.module.scss";

const cx = classNames.bind(styles);

export interface MemberType {
  name: string;
  roles: string[];
  isActive: boolean;
  generation: string;
  introduction: string;
  githubUrl?: string;
}

interface Props {
  member: MemberType;
}

const roleColor: { [key: string]: string } = {
  안드로이드: "#97CB62",
  iOS: "#6886D4",
  프론트엔드: "#EB71B3",
  백엔드: "#62C5CB",
  디자이너: "#F1BD37",
  운영팀: "#F0745F",
};

function MemberCard({
  member: { name, roles, isActive, generation, introduction, githubUrl },
}: Props) {
  const positionShownCount =
    roles.filter((role) => role === "운영팀").length > 0 ? 2 : 1;
  const tagsRef = useRef<HTMLDivElement | null>(null);
  const [hoverTags, setHoverTags] = useState(false);

  function handleMouseOverTags() {
    if (roles.length > positionShownCount) setHoverTags(true);
  }

  function handleMouseOutTags() {
    setHoverTags(false);
  }

  useEffect(() => {
    tagsRef.current?.addEventListener("mouseover", handleMouseOverTags);
    tagsRef.current?.addEventListener("mouseout", handleMouseOutTags);
    return () => {
      tagsRef.current?.removeEventListener("mouseover", handleMouseOverTags);
      tagsRef.current?.removeEventListener("mouseout", handleMouseOutTags);
    };
  }, []);

  return (
    <div className={cx("container")}>
      <div className={cx("profileImageAndBadge")}>
        <img
          className={cx("profileImage")}
          alt={"profileImage"}
          src={"/static/images/DefaultProfileImage.svg"}
        />
        <div className={cx("badge", isActive ? "active" : "")} />
      </div>
      <div className={cx("profile")}>
        <div className={cx("nameAndLink")}>
          <div className={cx("name")}>{name}</div>
        </div>
        <div className={cx("tagsWrapper")}>
          <div className={cx("tags", hoverTags ? "hover" : "")} ref={tagsRef}>
            <div className={cx("tag")}>
              <span className={cx("tagName")}>{generation}기</span>
            </div>
            {roles
              .slice(0, hoverTags ? 100 : positionShownCount)
              .map((role, i) => (
                <div
                  key={i}
                  className={cx("tag")}
                  style={{ backgroundColor: roleColor[role] }}
                >
                  <span className={cx("tagName")}>{role}</span>
                </div>
              ))}
            {roles.length > positionShownCount && !hoverTags ? (
              <div className={cx("tag")} style={{ backgroundColor: "#B8B8B8" }}>
                <span className={cx("tagName")}>
                  +{roles.length - positionShownCount}
                </span>
              </div>
            ) : null}
          </div>
        </div>
        <div className={cx("introduction")}>{introduction}</div>
      </div>
    </div>
  );
}

export default MemberCard;
