"use client";

import classNames from "classnames/bind";
import { usePathname } from "next/navigation";
import WaffleLink from "../WaffleLink";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

type TabItem = {
  name: string;
  pathname: string;
};

const tabs: TabItem[] = [
  { name: "소개", pathname: "/" },
  { name: "서비스", pathname: "/service" },
  { name: "멤버", pathname: "/member" },
];

export default function Header() {
  const currentPathname = usePathname();

  return (
    <header className={cx("header")}>
      <nav className={cx("content")}>
        {/*TODO: 개발/배포 주소 환경변수로 뺄까? */}
        <a className={cx("logo")} href="http://localhost:3000/">
          <img
            src="/static/images/logo/waffle_logo_title.png"
            alt="Wafflestudio logo image"
          />
        </a>
        <ul className={cx("tabNavigator")}>
          {/*TODO: 라우팅 확정되면 newHome 바꾸기 */}
          {tabs.map(({ name, pathname }) => (
            <li
              key={pathname}
              className={cx("tabItem", {
                selected: currentPathname === pathname,
              })}
            >
              <WaffleLink href={pathname}>{name}</WaffleLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
