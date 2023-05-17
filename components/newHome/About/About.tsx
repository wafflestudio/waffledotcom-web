import classNames from "classnames/bind";
import { useNavigatorScroll } from "../../Home/scroll";
import styles from "./About.module.scss";

const cx = classNames.bind(styles);

export default function About() {
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
      className={cx("container", { off: state.currentSection !== "about" })}
      ref={targetRef}
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
              <h3>와플스튜디오는 어떤 동아리인가요?</h3>
              <p>
                와플스튜디오는 서울대학교 컴퓨터공학부에서 탄생한 웹/앱 개발
                동아리에요. 개발자들의 커뮤니티 형성을 도모하고, 개발에 대해
                서로 이야기하고 경험하며 성장하는 것을 추구해요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
