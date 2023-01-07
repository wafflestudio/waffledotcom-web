import styles from "./About.module.scss";
import { useScroll } from "../../custom/scroll/useScroll";
import { useRef, useState } from "react";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const About = () => {
  const ref = useRef(null);
  const [show, setShow] = useState<boolean>(false);
  useScroll(ref, ({ progress }) => {
    if (0.5 < progress && progress < 3) {
      if (!show) {
        setShow(true);
      }
    } else {
      setShow(false);
    }
  });

  return (
    <section className={cx("container", { show })} ref={ref}>
      <div className={cx("background")} />
      <div className="description">
        <h3>와플스튜디오는 어떤 동아리인가요?</h3>
        <p>
          와플스튜디오는 서울대학교 컴퓨터공학부에서 탄생한{" "}
          <b>웹 / 앱 개발 동아리</b>예요.
        </p>
        <p>
          와플스튜디오는 개발자들의 커뮤니티 형성을 도모하고, 개발에 대해 서로
          이야기하고 경험하며 성장하는 것을 추구해요.
        </p>
        <br />
        <p>
          <span className="emoji">&#128421;</span> 와플스튜디오에서는 이런
          성장을 위해 여러 가지 활동이 진행돼요. 대표적으로
          <b>프로젝트</b>가 있어요.
        </p>
        <p>
          개발자라면 많은 경우 결국 프로젝트를 하는 직업이 되기 때문에, 프로젝트
          진행은 와플스튜디오에서 가장 큰 활동이에요.
        </p>
        <p>
          아니면 개발과 관련하여 원하는 주제가 있다면 자유롭게 <b>스터디</b>를
          열 수도 있어요. 프로젝트든 스터디든, 근본적인 목적은 “개발 공부”
          랍니다!
        </p>
        <br />
        <p>
          <span className="emoji">&#x1F5E3;</span> 또한 개발자간의 커뮤니티를
          도모하기 위해 “<b>코딩 모임</b>”이라는 모임이 매월 + 자유롭게 열려요.
        </p>
        <p>코딩을 좋아하는 사람들끼리 모여서 각자 할 일을 하게 돼요.</p>
        <p>
          그러면서 코딩이나 개발과 관련된 이야기도 나누고, <b>친목</b>을 다질 수
          있어요!
        </p>
      </div>
    </section>
  );
};

export default About;
