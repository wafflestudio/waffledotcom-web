import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./IntroductionHead.module.scss";

const cx = classNames.bind(styles);

interface IntroductionHeadProps {
  logo: string;
  title: string;
  des: string[];
  textColor: string;
  links: string[];
}

function IntroductionHead({
  logo,
  title,
  des,
  textColor,
  links,
}: IntroductionHeadProps) {
  return (
    <div className={cx("introductionHeader")}>
      <div className={cx("logo")}>
        <Image src={logo} alt="logo" layout="fill" />
      </div>
      <div className={cx("text", textColor)}>
        <span className={cx("title")}>{title}</span>
        <span className={cx("des")}>
          {des.map((d) => {
            return (
              <>
                {d}
                <br />
              </>
            );
          })}
        </span>
      </div>
      <div className={cx("store")}>
        <div className={cx("link")}>
          <Image
            className={cx("hover")}
            src="/static/images/logo/appstore_logo.svg"
            alt="appstore"
            layout="fill"
            onClick={() => {
              window.open(links[0]);
            }}
          />
        </div>
        <div className={cx("link")}>
          <Image
            className={cx("hover")}
            src="/static/images/logo/playstore_logo.svg"
            alt="appstore"
            layout="fill"
            onClick={() => {
              window.open(links[1]);
            }}
          />
        </div>
        <div className={cx("link")}>
          <Image
            className={cx("hover")}
            src="/static/images/logo/web_logo.svg"
            alt="appstore"
            layout="fill"
            onClick={() => {
              window.open(links[2]);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default IntroductionHead;
