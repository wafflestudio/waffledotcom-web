import classNames from "classnames/bind";
import { useState } from "react";
import { useNavigatorScroll } from "../../Home/scroll";
import styles from "./About.module.scss";

const cx = classNames.bind(styles);

export default function About() {
  const [more, setMore] = useState(false);
  const [red, setRed] = useState(true);
  const { state, targetRef } = useNavigatorScroll({
    callback: ({ progress, setState }) => {
      if (progress >= 1 && progress < 3) {
        setState({ currentSection: "about" });
      }
    },
    anchorId: "about",
  });
  return (
    <section
      className={cx("container", {
        off: state.currentSection !== "about",
        red,
      })}
      ref={targetRef}
      onTransitionEnd={(e) => {
        if (red) setRed(false);
      }}
    >
      <div className={cx("background")} />
      <div className={cx("foreground")}>
        <div className={cx("content")}>
          <div className={cx("name")}>
            <h1>와플</h1>
            <h1>스튜디오</h1>
            <img src={"/static/images/logo/pupuri_logo.png"} />
          </div>
          <div className={cx("description")}>
            <div className={cx("question")}>
              <h3>와플스튜디오는 어떤 동아리인가요?</h3>
              <p>
                와플스튜디오는 서울대학교 컴퓨터공학부에서 탄생한 웹/앱 개발
                동아리에요. 개발자들의 커뮤니티 형성을 도모하고, 개발에 대해
                서로 이야기하고 경험하며 성장하는 것을 추구해요.
              </p>
            </div>
            <div className={cx("question")}>
              <h3>와플스튜디오는 어떤 활동이 진행되나요?</h3>
              <p>
                와플스튜디오에서는 이런 성장을 위해 다양한 활동이 진행돼요.
                대표적으로 프로젝트와 스터디가 있는데, 스터디 같은 경우 개발과
                관련하여 원하는 주제가 있다면 자유롭게 열 수 있어요. 저희의
                근본적인 목적은 “개발 공부”랍니다!{" "}
                {!more && (
                  <span>
                    ...{" "}
                    <span
                      className={cx("underline")}
                      onClick={() => setMore(true)}
                    >
                      더보기
                    </span>
                  </span>
                )}
              </p>
              {more && (
                <p>
                  <br />
                  또한 개발자간의 커뮤니티를 도모하기 위해 “코딩 모임”이라는
                  모임이 매월 자유롭게 열려요. 코딩을 좋아하는 사람들끼리 모여서
                  각자 할 일을 하게 돼요. 그러면서 코딩이나 개발과 관련된
                  이야기도 나누고, 친목을 다질 수 있어요!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
