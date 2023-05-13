import classNames from "classnames/bind";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

type TabItemProps = {
  name: string;
  pathname: string;
};

function TabItem({ name, pathname }: TabItemProps) {
  const router = useRouter();
  return (
    <li
      className={cx("tabItem", {
        selected: router.pathname === pathname,
      })}
      onClick={() => {
        router.push(pathname);
      }}
    >
      {name}
    </li>
  );
}
export default function Header() {
  return (
    <header className={cx("header")}>
      {/*TODO: 개발/배포 주소 환경변수로 뺄까? */}
      <a className={cx("logo")} href="http://localhost:3000/newHome/">
        <img src="/static/images/logo/waffle_logo_title.png" />
      </a>
      <ul className={cx("tabNavigator")}>
        {/*TODO: 라우팅 확정되면 newHome 바꾸기 */}
        <TabItem name="소개" pathname="/newHome" />
        <TabItem name="서비스" pathname="/service" />
        <TabItem name="멤버" pathname="/member" />
      </ul>
    </header>
  );
}
