import { useRef } from "react";
import classNames from "classnames/bind";
import { useScroll } from "../../../hooks/scroll/useScroll";
import useDelayedState from "../../../hooks/delayedState/useDelayedState";
import useWaffleScroll from "../../../library/waffleScroll";
import styles from "./WhatWeDo.module.scss";

const cx = classNames.bind(styles);
function WhatWeDo() {
  const { ref, scrollState } = useWaffleScroll(
    ({ toggleState }) => {
      toggleState(0.5, 2.9, "available");
    },
    { available: false },
  );

  return (
    <>
      <section className={cx("container", scrollState)} ref={ref}>
        <div className={cx("background")} />
        <div className={cx("description")}>
          <h3># 와플스튜디오에서는 어떤 활동을 하나요?</h3>
          <p>
            와플스튜디오에서는 개발과 관련된 “모든 활동을” 자유롭게 할 수
            있어요. <br />
            와플스튜디오에서 현재 공식적으로 운영하고 지원하는 활동은{" "}
            <b>프로젝트, 스터디, 코딩 모임</b>이 있어요.
            <br />
            또한 프로젝트와 스터디에 참여하시는 분들께서는 2달에 한 번 열리는{" "}
            <b>다함께 반죽하기</b> 또는 <b>와플 굽기</b> 행사에 반드시 참여해
            주셔야 해요.
            <br />
            프로젝트나 스터디가 아니더라도, 할 만 하다고 여겨진다면 공식적으로
            운영하고 지원할 수도 있어요! 😃
          </p>
          <p>
            그리고, 이런 활동은 대부분 팀 단위로 이루어지게 돼요. <br />
            혼자서 어떤 프로젝트를 진행하거나 스터디를 진행하는 경우는 잘
            없겠죠? <br />
            이렇게 팀을 만드는 행사가 바로 <b>팀빌딩</b>이에요.
            <br /> 팀빌딩은 기본적으로 2월 초 많은 신입회원분들이 들어오시는
            시기에 이루어지고,
            <br /> 아이디어가 있거나 참여하고자 하는 수요가 많다면 2월 초가
            아니어도 유연하게 몇 번 더 이루어질 수도 있어요.
          </p>
        </div>
      </section>
    </>
  );
}

export default WhatWeDo;
