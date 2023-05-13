import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./Board.module.scss";

const cx = classNames.bind(styles);

function numberWithCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function CountingNumber({ targetNum }: { targetNum: number }) {
  // targetNum이 n자리 수면 10^n 부터 시작
  const [num, setNum] = useState(10 ** Math.floor(Math.log10(targetNum)));
  if (num < targetNum) {
    const incrementRate = 10; // 숫자 올라가는 속도 결정 (작을수록 빨리 올라감)
    const interval = 20; // 숫자 올라가는 frequency 결정 (클수록 빨리 변함)
    setTimeout(() => {
      setNum((prev: number) => prev + (targetNum - prev) / incrementRate);
    }, interval);
  }
  return <span>{numberWithCommas(Math.ceil(num))}</span>;
}

function Board() {
  return (
    <section className={cx("container")}>
      <div className={cx("header")}>
        <span className={cx("title")}>MEMBERS</span>
        <div className={cx("description")}>
          <span>현재까지</span>
          <span className={cx("numberOfMembers")}>
            <CountingNumber targetNum={456} />
          </span>
          <span>명이 와플스튜디오에 함께했습니다.</span>
        </div>
      </div>
      <div className={cx("filterContainer")}>
        <div className={cx("filter")}></div>
      </div>
      <div className={cx("cardContainer")}></div>
    </section>
  );
}

export default Board;
