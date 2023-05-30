import classNames from "classnames/bind";
import { useNavigatorScroll } from "../../Home/scroll";
import Image from "next/image";
import foregroundBorder from "../../../public/static/images/newHome/progress_foreground_border.svg";
import styles from "./Services.module.scss";
import { useCallback, useEffect, useState } from "react";

const cx = classNames.bind(styles);

type TCarouselItemData = {
  // TODO: enum으로
  serviceName: string;
  serviceLink: string;
  serviceLogo: string;
  serviceLogoAltMsg: string;
  servicePhoneImg: string;
  servicePhoneImgAltMsg: string;
  serviceNameForServiceNameH1Tag: string;
  serviceDescription: string;
};

const carouselItemDataList: TCarouselItemData[] = [
  {
    serviceName: "snutt",
    serviceLink: "https://wafflestudio.com",
    serviceLogo: "/static/images/logo/snutt_logo.svg",
    serviceLogoAltMsg: "snutt app logo",
    servicePhoneImg: "/static/images/newHome/phone_snutt.svg",
    servicePhoneImgAltMsg: "snutt phone display image",
    serviceNameForServiceNameH1Tag: "SNUTT",
    serviceDescription: "서울대학교 시간표 어플",
  },
  {
    serviceName: "siksha",
    serviceLink: "https://wafflestudio.com",
    serviceLogo: "/static/images/logo/siksha_logo.svg",
    serviceLogoAltMsg: "siksha app logo",
    servicePhoneImg: "/static/images/newHome/phone_siksha.svg",
    servicePhoneImgAltMsg: "siksha phone display image",
    serviceNameForServiceNameH1Tag: "식샤",
    serviceDescription: "서울대학교 학식 어플",
  },
  {
    serviceName: "snuboard",
    serviceLink: "https://wafflestudio.com",
    serviceLogo: "/static/images/logo/snuboard_logo.svg",
    serviceLogoAltMsg: "snuboard app logo",
    servicePhoneImg: "/static/images/newHome/phone_snuboard.svg",
    servicePhoneImgAltMsg: "snuboard phone display image",
    serviceNameForServiceNameH1Tag: "스누보드",
    serviceDescription: "서울대학교 과별 알림 어플",
  },
];

function ProgressBox({
  serviceIndex,
  increaseIndex,
  isPlaying,
  toggleIsPlaying,
}: {
  serviceIndex: number;
  increaseIndex: () => void;
  isPlaying: boolean;
  toggleIsPlaying: () => void;
}) {
  const [timeCount, setTimeCount] = useState<number>(0);

  useEffect(() => {
    if (timeCount === 3000) {
      setTimeCount(0);
      increaseIndex();
    }
  }, [timeCount, increaseIndex]);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setTimeCount((prev) => prev + 5);
      }, 5);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isPlaying]);

  return (
    <div className={cx("progress-box", `state-${serviceIndex}`)}>
      <div className={cx("bar-wrapper")}>
        <div className={cx("bar", "background-bar")}></div>
        <div className={cx("bar", "foreground-bar")}></div>
      </div>
      <div className={cx("index-wrapper")}>
        <p className={cx("index", "current-index")}>{serviceIndex}</p>
        <div className={cx("divider")}></div>
        <p className={cx("index")}>{carouselItemDataList.length}</p>
      </div>
      <button
        className={cx("play-button", isPlaying ? "playing" : "stopped")}
        onClick={toggleIsPlaying}
      >
        <div className={cx("border", "background-border")}></div>
        {/* TODO: 타이머 애니메이션 미완 */}
        <div className={cx("foreground-border")}>
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.4655 14.4828C28.4655 22.2052 22.2052 28.4655 14.4828 28.4655C6.76029 28.4655 0.5 22.2052 0.5 14.4828C0.5 6.76029 6.76029 0.5 14.4828 0.5C22.2052 0.5 28.4655 6.76029 28.4655 14.4828Z"
              stroke="#F0745F"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

function CarouselItem({ serviceData }: { serviceData: TCarouselItemData }) {
  const {
    serviceLink,
    serviceLogo,
    serviceLogoAltMsg,
    servicePhoneImg,
    servicePhoneImgAltMsg,
    serviceNameForServiceNameH1Tag,
    serviceDescription,
  } = serviceData;
  return (
    <div className={cx("carousel-item")}>
      <div className={cx("left")}>
        <a className={cx("service-icon")} href={serviceLink}>
          <Image
            src={serviceLogo}
            alt={serviceLogoAltMsg}
            width="168px"
            height="168px"
          />
        </a>
        <h1 className={cx("service-name")}>{serviceNameForServiceNameH1Tag}</h1>
        <p className={cx("description")}>{serviceDescription}</p>
      </div>
      <a className={cx("phone")} href={serviceLink}>
        <Image
          src={servicePhoneImg}
          alt={servicePhoneImgAltMsg}
          width="306px"
          height="582px"
        />
      </a>
    </div>
  );
}

function Carousel({
  serviceIndex,
  increaseIndex,
  decreaseIndex,
  stopPlaying,
}: {
  serviceIndex: number;
  increaseIndex: () => void;
  decreaseIndex: () => void;
  stopPlaying: () => void;
}) {
  return (
    <div className={cx("carousel")}>
      <button
        className={cx("carousel-button", "previous")}
        onClick={() => {
          decreaseIndex();
          stopPlaying();
        }}
      >
        <Image
          src="/static/images/newHome/previous_button_icon.svg"
          alt="previous button"
          width="26px"
          height="43px"
        />
      </button>
      <div className={cx("carousel-frame")}>
        <div
          className={cx("carousel-items-container", `state-${serviceIndex}`)}
        >
          {carouselItemDataList.map(
            (serviceData: TCarouselItemData, index: number) => (
              <CarouselItem key={index} serviceData={serviceData} />
            ),
          )}
        </div>
      </div>
      <button
        className={cx("carousel-button", "next")}
        onClick={() => {
          increaseIndex();
          stopPlaying();
        }}
      >
        <Image
          src="/static/images/newHome/next_button_icon.svg"
          alt="next button"
          width="26px"
          height="43px"
        />
      </button>
    </div>
  );
}

export default function Services() {
  const { state, targetRef } = useNavigatorScroll({
    callback: ({ progress, setState }) => {
      if (progress >= 1 && progress < 3) {
        setState({ currentSection: "services" });
      }
    },
    anchorId: "services",
  });
  const [serviceIndex, setServiceIndex] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const increaseIndex = useCallback(() => {
    setServiceIndex((prev) => (prev % carouselItemDataList.length) + 1);
  }, [setServiceIndex]);
  const decreaseIndex = useCallback(() => {
    setServiceIndex((prev) => ((prev + 1) % carouselItemDataList.length) + 1);
  }, [setServiceIndex]);
  return (
    <section
      className={cx("container", { off: state.currentSection !== "services" })}
      ref={targetRef}
    >
      <div className={cx("background")} />
      <div className={cx("foreground")}>
        <div className={cx("content-wrapper")}>
          <div className={cx("texts")}>
            <h1 className={cx("title")}>출시된 서비스</h1>
            <p className={cx("description")}>
              와플스튜디오의 프로젝트로 시작해 <br /> 실제 사용되고 있는 서비스
            </p>
            <a className={cx("more-button")} href="https://wafflestudio.com/">
              <p>자세히 알아보기</p>
              <Image
                src="/static/images/newHome/arrow_icon.svg"
                alt="arrow icon"
                width="28px"
                height="9px"
              />
            </a>
            <ProgressBox
              serviceIndex={serviceIndex}
              increaseIndex={increaseIndex}
              isPlaying={isPlaying}
              toggleIsPlaying={() => {
                setIsPlaying((prev) => !prev);
              }}
            />
          </div>

          <Carousel
            serviceIndex={serviceIndex}
            increaseIndex={increaseIndex}
            decreaseIndex={decreaseIndex}
            stopPlaying={() => {
              setIsPlaying(false);
            }}
          />
        </div>
      </div>
    </section>
  );
}
