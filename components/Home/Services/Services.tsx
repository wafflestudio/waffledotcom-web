"use client";

import classNames from "classnames/bind";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useNavigatorScroll } from "../../common/Scroll/scroll";
import ProgressBox from "./ProgressBox";
import Carousel from "./Carousel";
import styles from "./Services.module.scss";

const cx = classNames.bind(styles);

export type TCarouselItemData = {
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
    servicePhoneImg: "/static/images/home/phone_snutt.svg",
    servicePhoneImgAltMsg: "snutt phone display image",
    serviceNameForServiceNameH1Tag: "SNUTT",
    serviceDescription: "서울대학교 시간표 어플",
  },
  {
    serviceName: "siksha",
    serviceLink: "https://wafflestudio.com",
    serviceLogo: "/static/images/logo/siksha_logo.svg",
    serviceLogoAltMsg: "siksha app logo",
    servicePhoneImg: "/static/images/home/phone_siksha.svg",
    servicePhoneImgAltMsg: "siksha phone display image",
    serviceNameForServiceNameH1Tag: "식샤",
    serviceDescription: "서울대학교 학식 어플",
  },
  {
    serviceName: "snuboard",
    serviceLink: "https://wafflestudio.com",
    serviceLogo: "/static/images/logo/snuboard_logo.svg",
    serviceLogoAltMsg: "snuboard app logo",
    servicePhoneImg: "/static/images/home/phone_snuboard.svg",
    servicePhoneImgAltMsg: "snuboard phone display image",
    serviceNameForServiceNameH1Tag: "스누보드",
    serviceDescription: "서울대학교 과별 알림 어플",
  },
];

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

  useEffect(() => {
    if (state.currentSection === "services") {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [state, setIsPlaying]);

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
                src="/static/images/home/arrow_icon.svg"
                alt="arrow icon"
                width="28"
                height="9"
              />
            </a>
            <ProgressBox
              carouselLength={carouselItemDataList.length}
              serviceIndex={serviceIndex}
              increaseIndex={increaseIndex}
              isPlaying={isPlaying}
              toggleIsPlaying={() => {
                setIsPlaying((prev) => !prev);
              }}
            />
          </div>

          <Carousel
            carouselItemDataList={carouselItemDataList}
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
