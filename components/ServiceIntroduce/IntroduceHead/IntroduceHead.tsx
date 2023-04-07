import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./IntroduceHead.module.scss";

const cx = classNames.bind(styles);

interface IntroduceHeadProps {
  logo: string;
  title: string;
  des: string[];
  textColor: string;
  link?: string[];
}

function IntroduceHead({ logo, title, des, textColor }: IntroduceHeadProps) {
  return (
    <div className={cx("introduceHeader")}>
      <Image
        className={cx("logo")}
        src={logo}
        alt="logo"
        width={155}
        height={155}
      />

      <div className={cx("text", textColor)}>
        <div className={cx("title")}>{title}</div>
        <div className={cx("des")}>
          {des.map((d) => {
            return (
              <>
                {d}
                <br />
              </>
            );
          })}
        </div>
      </div>
      <div className={cx("store")}>
        <Image
          className={cx("hover")}
          src="/static/images/logo/appstore_logo.svg"
          alt="appstore"
          width={45}
          height={45}
        />
        <Image
          className={cx("hover")}
          src="/static/images/logo/playstore_logo.svg"
          alt="appstore"
          width={45}
          height={45}
        />
        <Image
          className={cx("hover")}
          src="/static/images/logo/web_logo.svg"
          alt="appstore"
          width={45}
          height={45}
        />
      </div>
    </div>
  );
}

export default IntroduceHead;
