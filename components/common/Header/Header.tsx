import classNames from "classnames/bind";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

type TabItem = {
  name: string;
  pathname: string;
};

const tabs: TabItem[] = [
  { name: "소개", pathname: "/newHome" },
  { name: "서비스", pathname: "/service" },
  { name: "멤버", pathname: "/member" },
];

export default function Header() {
  const router = useRouter();

  return (
    <header className={cx("header")}>
      {/*TODO: 개발/배포 주소 환경변수로 뺄까? */}
      <a className={cx("logo")} href="http://localhost:3000/newHome/">
        <img src="/static/images/logo/waffle_logo_title.png" />
      </a>
      <ul className={cx("tabNavigator")}>
        {/*TODO: 라우팅 확정되면 newHome 바꾸기 */}
        {tabs.map(({ name, pathname }) => (
          <li
            key={pathname}
            className={cx("tabItem", {
              selected: router.pathname === pathname,
            })}
            onClick={() => {
              router.push(pathname);
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </header>
  );
}
