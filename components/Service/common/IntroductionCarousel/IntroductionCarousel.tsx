import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./IntroductionCarousel.module.scss";

const cx = classNames.bind(styles);

interface IntroductionCarouselProps {
  carouselImages: string[];
}

function IntroductionCarousel({ carouselImages }: IntroductionCarouselProps) {
  const [page, setPage] = useState(0);
  const [index, setIndex] = useState(0);

  const decreaseIndex = () => {
    if (index === 0) {
      setPage(Math.floor((carouselImages.length - 1) / 3));
      setIndex(carouselImages.length - 1);
    } else if (index % 3 === 0) {
      setPage(page - 1);
      setIndex(index - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const increaseIndex = useCallback(() => {
    if (index === carouselImages.length - 1) {
      setPage(0);
      setIndex(0);
    } else if (index % 3 === 2) {
      setPage(page + 1);
      setIndex(index + 1);
    } else {
      setIndex(index + 1);
    }
  }, [page, index, carouselImages.length]);

  // 자동 슬라이드 기능 사용하려면 주석 해제
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     increaseIndex();
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, [increaseIndex]);

  return (
    <div className={cx("introductionCarousel")}>
      <div className={cx("slider")}>
        <div
          className={cx("selectWrap")}
          style={{
            width: `calc(100% * ${carouselImages.length})`,
            transform: `translateX(-${(index / carouselImages.length) * 100}%)`,
          }}
        >
          {carouselImages.map((image, i) => {
            return (
              <div
                key={i}
                className={cx("slideImage")}
                style={{ width: `calc(100% / ${carouselImages.length})` }}
              >
                <Image
                  src={image}
                  alt="carousel main image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={cx("carouselBar")}>
        <Image
          className={cx("hover")}
          src={"/static/images/arrow/left_arrow.svg"}
          alt="left arrow"
          width={16}
          height={32}
          onClick={() => {
            decreaseIndex();
          }}
        />
        <div
          className={cx("imageWrapper", "hover", { active: index % 3 === 0 })}
          key={page + 0}
          onClick={() => {
            setIndex(3 * page);
          }}
        >
          <Image
            src={carouselImages[3 * page]}
            alt="carousel image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {3 * page + 1 > carouselImages.length - 1 ? (
          <div className={cx("imageWrapper")} key={page + 1}></div>
        ) : (
          <div
            className={cx("imageWrapper", "hover", { active: index % 3 === 1 })}
            key={page + 1}
            onClick={() => {
              setIndex(3 * page + 1);
            }}
          >
            <Image
              src={carouselImages[3 * page + 1]}
              alt="carousel image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        {3 * page + 2 > carouselImages.length - 1 ? (
          <div className={cx("imageWrapper")} key={page + 2}></div>
        ) : (
          <div
            className={cx("imageWrapper", "hover", { active: index % 3 === 2 })}
            key={page + 2}
            onClick={() => {
              setIndex(3 * page + 2);
            }}
          >
            <Image
              src={carouselImages[3 * page + 2]}
              alt="carousel image"
              layout="fill"
            />
          </div>
        )}
        <Image
          className={cx("hover")}
          src={"/static/images/arrow/right_arrow.svg"}
          alt="rigth arrow"
          width={16}
          height={32}
          onClick={() => {
            increaseIndex();
          }}
        />
      </div>
    </div>
  );
}

export default IntroductionCarousel;
