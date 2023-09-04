import Image from "next/legacy/image";
import classNames from "classnames/bind";
import { Fragment } from "react";
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
          {des.map((d, i) => {
            return (
              <Fragment key={i}>
                {d}
                <br />
              </Fragment>
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
            alt="playstore"
            layout="fill"
            onClick={() => {
              window.open(links[1]);
            }}
          />
        </div>
        {links.length > 2 && (
          <div className={cx("link")}>
            <Image
              className={cx("hover")}
              src="/static/images/logo/web_logo.svg"
              alt="web"
              layout="fill"
              onClick={() => {
                window.open(links[2]);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default IntroductionHead;
