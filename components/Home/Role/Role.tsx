"use client";
import classNames from "classnames/bind";
import useWaffleScroll from "../../../library/waffleScroll";
import styles from "./Role.module.scss";

const cx = classNames.bind(styles);

function Role() {
  const {
    ref,
    scrollState: { available, notFold },
  } = useWaffleScroll(
    ({ toggleState }) => {
      toggleState(0.2, 3, "available");
      toggleState(0.7, 3.1, "notFold");
    },
    { available: false, notFold: false },
  );

  return (
    <section
      className={cx("container", { available, fold: !notFold })}
      ref={ref}
    >
      <div className={cx("background")} />
      <div className={cx("line", "line1")}>
        <div className={cx("box", "short")}>준회원</div>
        <div className={cx("box", "long")}>
          루키즈는 운영팀이 주관하는 세미나 과정 (세미나 + 토이프로젝트) 을
          훌륭히 이수할 경우 정회원 중 programmer 로 승격하게 돼요.
        </div>
      </div>
      <div className={cx("line", "line2")}>
        <div className={cx("box", "short")}>정회원</div>
        <div className={cx("box", "long")}>
          활동회원일 경우 github push 권한, notion 편집 권한, aws IAM, 그리고
          와플스튜디오가 제공하는 코딩 모임 • 스프린트 지원금 수령의 권한을 얻게
          돼요. 즉, 프로젝트나 스터디 등 와플스튜디오의 활동에 참여하기 위해서는
          반드시 활동회원이어야겠죠? 😀
        </div>
      </div>
      <div className={cx("line", "line3", "sub")}>
        <div className={cx("box", "short")}>디자이너</div>
        <div className={cx("box", "middle")}>
          미술대학 디자인과 학생이 아니더라도 디자인에 관심이 있으면 디자이너가
          될 수 있어요. <br />
          Ps, Ai 정도만 다룰 수 있다면 Figma, Sketch, XD 등의 툴은 금세 익힐 수
          있어요! (프로젝트마다 사용하는 툴이 달라요)
        </div>
      </div>
      <div className={cx("line", "line4", "sub")}>
        <div className={cx("box", "short")}>프로그래머</div>
        <div className={cx("box", "middle")}>
          분야는 크게 프론트 • 백 • 안드로이드 • iOS 네 가지로 나뉘어요. <br />
          팀 빌딩때 초기 멤버로 참여하거나, 이미 진행 중인 프로젝트에 충원
          인력으로 들어갈 수 있어요. <br />
          관심있는 분야의 스터디에도 참여할 수 있어요.
        </div>
      </div>
      <div className={cx("line", "line5", "sub")}>
        <div className={cx("box", "short")}>운영팀</div>
        <div className={cx("box", "middle")}>
          운영팀은 와플스튜디오의 모든 운영을 맡아서 진행해요.
          <br /> 리크루팅, 팀빌딩, 인프라 관리, 프로젝트 관리, 회원 관리, 재정
          관리, 외부 컨택 등이요!
        </div>
      </div>
      <div className={cx("line", "line6", "sub")}>
        <div className={cx("box", "short", "dark")}>비활동회원</div>
        <div className={cx("box", "middle", "dark")}>
          한번 정회원 자격을 얻으면 별다른 일이 있지 않다면 계속 정회원 자격을
          유지하게 돼요.
          <br /> 비활동 회원은 활동을 쉬고 있는 회원이에요. 상 / 하반기 마다
          해당 기간에 활동하실 건지에 대한 신청을 받아요.
        </div>
      </div>
      <div className={cx("line", "boxCover")}>
        와플스튜디오는 어떻게 구성되어 있을까요?
      </div>
    </section>
  );
}

export default Role;
