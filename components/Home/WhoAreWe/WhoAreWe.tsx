import { useRef } from "react";
import classNames from "classnames/bind";
import { useScroll } from "../../../hooks/scroll/useScroll";
import useDelayedState from "../../../hooks/delayedState/useDelayedState";
import useWaffleScroll from "../../../library/deprecated/waffleScroll";
import styles from "./WhoAreWe.module.scss";

const cx = classNames.bind(styles);
function WhoAreWe() {
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
          <h3># 와플스튜디오의 구성원</h3>
          <p>
            와플스튜디오 구성원은 크게 <b>준회원</b>과 <b>정회원</b>으로
            나뉘어요.
            <br />
            <b>준회원</b> 루키 세미나를 통해 개발을 배우며 와플스튜디오 정회원이
            되려고 준비중이신 분들 (루키즈)이고, <br />
            <b>정회원</b>은 와플스튜디오에서 개발 / 디자인 활동을 진행해 주시는
            분들이에요.
          </p>
          <p>
            정회원은 다시 <b>활동회원</b>과 <b>비활동회원</b>으로 나뉘는데,
            대부분의 와플스튜디오 활동은 활동회원분들이 이끌어 나가시게 돼요.
            <br />
            하지만 간혹 비활동회원 분들도 슬랙에 나타나서 한두 마디씩 해 주시곤
            하신답니다!
          </p>
          <p>
            마지막으로 와플스튜디오에는 운영팀이라는 특별한 팀이 있어요.
            <br />
            <b>
              혹시 와플스튜디오에서 활동하다가 모르는 게 생기셨다면 운영팀에게
              편하게 질문해주셔도 됩니다 :)
            </b>
          </p>
        </div>
      </section>
    </>
  );
}

export default WhoAreWe;
