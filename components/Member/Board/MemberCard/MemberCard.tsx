import classNames from "classnames/bind";
import { useRef, useState } from "react";
import styles from "./MemberCard.module.scss";
import { HTML } from "mdast";

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
  const [hoverTags, setHoverTags] = useState(false);
  const helper = useRef<HTMLDivElement | null>(null);

  function handleMouseEnterTags() {
    if (roles.length > positionShownCount) setHoverTags(true);
  }

  function handleMouseLeaveTags() {
    setHoverTags(false);
  }

  function handleMouseMoveHelper(e: React.MouseEvent<HTMLElement>) {
    if (e.currentTarget.lastChild) {
      const helper = e.currentTarget.lastChild as HTMLElement;
      helper.style.left = `${e.clientX}px`;
      helper.style.top = `${e.clientY - 25}px`;
    }
  }

  return (
    <div className={cx("container")}>
      <div
        className={cx("profileImageAndBadge", isActive ? "active" : "inactive")}
        onMouseMove={handleMouseMoveHelper}
      >
        <img
          className={cx("profileImage")}
          alt={"profileImage"}
          src={"/static/images/DefaultProfileImage.svg"}
        />
        <div className={cx("badge")} />
        <div className={cx("helper")} ref={helper}>
          이번 학기 {isActive ? "활동" : "비활동"} 회원입니다.
        </div>
      </div>
      <div className={cx("profile")}>
        <div className={cx("nameAndLink")}>
          <div className={cx("name")}>{name}</div>
          <a
            className={cx("github")}
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            onMouseMove={handleMouseMoveHelper}
          >
            <img
              className={cx("githubSymbol")}
              alt="githubSymbol"
              src="/static/images/githubSymbol.svg"
            />
            <div className={cx("helper")}>
              <b>GitHub</b>&nbsp;바로가기
            </div>
          </a>
        </div>
        <div className={cx("tagsWrapper")}>
          <div
            className={cx("tags", hoverTags ? "hover" : "")}
            onMouseEnter={handleMouseEnterTags}
            onMouseLeave={handleMouseLeaveTags}
          >
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
