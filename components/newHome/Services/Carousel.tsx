import classNames from "classnames/bind";
import Image from "next/image";
import { TCarouselItemData } from "./Services";
import styles from "./Carousel.module.scss";

const cx = classNames.bind(styles);

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
            width="168"
            height="168"
          />
        </a>
        <h1 className={cx("service-name")}>{serviceNameForServiceNameH1Tag}</h1>
        <p className={cx("description")}>{serviceDescription}</p>
      </div>
      <a className={cx("phone")} href={serviceLink}>
        <Image
          src={servicePhoneImg}
          alt={servicePhoneImgAltMsg}
          width="306"
          height="582"
        />
      </a>
    </div>
  );
}

export default function Carousel({
  carouselItemDataList,
  serviceIndex,
  increaseIndex,
  decreaseIndex,
  stopPlaying,
}: {
  carouselItemDataList: TCarouselItemData[];
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
          width="26"
          height="43"
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
          width="26"
          height="43"
        />
      </button>
    </div>
  );
}
