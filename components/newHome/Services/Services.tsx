import classNames from "classnames/bind";
import { useNavigatorScroll } from "../../Home/scroll";
import Image from "next/image";
import styles from "./Services.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

type TserviceData = {
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

const serviceDataArray: TserviceData[] = [
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

const serviceDataArrayLength: number = serviceDataArray.length;

const increasedIndex = (index: number) => (index % serviceDataArrayLength) + 1;
const decreasedIndex = (index: number) =>
  ((index + 1) % serviceDataArrayLength) + 1;

function ProgressBox({
  serviceIndex,
  setServiceIndex,
}: {
  serviceIndex: number;
  setServiceIndex: (getPrev: (prevState: number) => number) => void;
}) {
  return (
    <div className={cx("progress-box")}>
      <div className={cx("bar-wrapper")}>
        <div className={cx("bar", "background-bar")}></div>
        <div className={cx("bar", "foreground-bar")}></div>
      </div>
      <div className={cx("index-wrapper")}>
        {/* TODO: index 작업 */}
        <p className={cx("index", "current-index")}>{serviceIndex}</p>
        <div className={cx("divider")}></div>
        <p className={cx("index")}>{serviceDataArrayLength}</p>
      </div>
      <button className={cx("play-button")}>
        <div className={cx("border", "background-border")}></div>
        <div className={cx("border", "foreground-border")}></div>
      </button>
    </div>
  );
}

function CarouselItem({ serviceData }: { serviceData: TserviceData }) {
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
  setServiceIndex,
}: {
  serviceIndex: number;
  setServiceIndex: (getPrev: (prevState: number) => number) => void;
}) {
  return (
    <div className={cx("carousel")}>
      <button
        className={cx("carousel-button", "previous")}
        onClick={() => {
          setServiceIndex((prev) => decreasedIndex(prev));
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
          {serviceDataArray.map((serviceData: TserviceData, index: number) => (
            <CarouselItem key={index} serviceData={serviceData} />
          ))}
        </div>
      </div>
      <button
        className={cx("carousel-button", "next")}
        onClick={() => {
          setServiceIndex((prev) => increasedIndex(prev));
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
              setServiceIndex={setServiceIndex}
            />
          </div>

          <Carousel
            serviceIndex={serviceIndex}
            setServiceIndex={setServiceIndex}
          />
        </div>
      </div>
    </section>
  );
}
