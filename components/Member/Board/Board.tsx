import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Board.module.scss";
import { CheckBoxFilter, SelectFilter } from "./Filter/Filter";
import MemberCard, { MemberType } from "./MemberCard/MemberCard";
import _members from "./members.json";

const members = _members as MemberType[];

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
  const roles = [
    "운영팀",
    "디자이너",
    "iOS",
    "안드로이드",
    "프론트엔드",
    "백엔드",
  ];
  const [selectedRoles, setSelectedRoles] = useState<boolean[]>(
    roles.map(() => true),
  );
  const selectedRoleSet = new Set(roles.filter((role, i) => selectedRoles[i]));

  const states = ["활동 회원", "비활동 회원"];
  const [selectedStates, setSelectedStates] = useState<boolean[]>(
    states.map(() => true),
  );

  const generations = ["19", "19.5", "20", "20.5", "21"];
  const [selectedGeneration, setSelectedGeneration] = useState<number>(-1);

  const [scrollProgress, setScrollProgress] = useState(0);
  function handleScrollProgress(e: React.UIEvent<HTMLDivElement>) {
    console.log(scrollProgress);
    setScrollProgress(
      e.currentTarget.scrollTop /
        (e.currentTarget.scrollHeight - e.currentTarget.clientHeight),
    );
  }

  return (
    <section className={cx("container")}>
      <div className={cx("header")}>
        <span className={cx("title")}>MEMBERS</span>
        <div className={cx("description")}>
          <span>현재까지</span>
          <span className={cx("numberOfMembers")}>
            <CountingNumber targetNum={members.length} />
          </span>
          <span>명이 와플스튜디오에 함께했습니다.</span>
        </div>
      </div>
      <div className={cx("filterContainer")}>
        <div className={cx("filterLine", "first")}>
          <CheckBoxFilter
            name={"역할"}
            options={[
              "운영팀",
              "디자이너",
              "iOS",
              "안드로이드",
              "프론트엔드",
              "백엔드",
            ]}
            selectedOptions={selectedRoles}
            setSelectedOptions={setSelectedRoles}
          />
          <SelectFilter
            name={"기수 선택"}
            options={generations}
            selectedOptions={selectedGeneration}
            setSelectedOptions={setSelectedGeneration}
          />
        </div>
        <div className={cx("filterLine", "second")}>
          <CheckBoxFilter
            name={"활동"}
            options={states}
            selectedOptions={selectedStates}
            setSelectedOptions={setSelectedStates}
          />
        </div>
      </div>
      <div className={cx("shadowBox")}>
        <div
          className={cx(
            "shadow",
            "top",
            scrollProgress !== 0 ? "active" : "inactive",
          )}
        />
        <div className={cx("scrollBox")} onScroll={handleScrollProgress}>
          <div className={cx("cardContainer")}>
            {members
              .filter(
                (member) =>
                  member.roles
                    .map((role) => selectedRoleSet.has(role))
                    .indexOf(true) !== -1,
              ) // role 필터
              .filter(
                (member) =>
                  (member.isActive && selectedStates[0]) ||
                  (!member.isActive && selectedStates[1]),
              ) // 활동회원 필터
              .filter(
                (member) =>
                  selectedGeneration === -1 ||
                  generations[selectedGeneration] === member.generation,
              ) // 기수 필터
              .map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
          </div>
        </div>
        <div
          className={cx(
            "shadow",
            "bottom",
            scrollProgress !== 1 ? "active" : "inactive",
          )}
        />
      </div>
    </section>
  );
}

export default Board;
