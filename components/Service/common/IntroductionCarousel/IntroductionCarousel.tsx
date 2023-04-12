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
    if (page === 0 && index === 0) {
      setPage(Math.floor((carouselImages.length - 1) / 3));
      setIndex((carouselImages.length - 1) % 3);
    } else if (index === 0) {
      setPage(page - 1);
      setIndex(2);
    } else {
      setIndex(index - 1);
    }
  };

  const increaseIndex = useCallback(() => {
    if (3 * page + index === carouselImages.length - 1) {
      setPage(0);
      setIndex(0);
    } else if (index % 3 === 2) {
      setPage(page + 1);
      setIndex(0);
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
        <div className={cx("selectWrap", `image${index}`)}>
          <div className={cx("slideImage")}>
            <Image
              src={carouselImages[3 * page]}
              alt="carousel main image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={cx("slideImage")}>
            <Image
              src={carouselImages[3 * page + 1]}
              alt="snutt_1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={cx("slideImage")}>
            <Image
              src={carouselImages[3 * page + 2]}
              alt="snutt_1"
              layout="fill"
              objectFit="cover"
            />
          </div>
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
          className={cx("imageWrapper", "hover", { active: index === 0 })}
          key={page + 0}
          onClick={() => {
            setIndex(0);
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
            className={cx("imageWrapper", "hover", { active: index === 1 })}
            key={page + 1}
            onClick={() => {
              setIndex(1);
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
            className={cx("imageWrapper", "hover", { active: index === 2 })}
            key={page + 2}
            onClick={() => {
              setIndex(2);
            }}
          >
            <Image
              src={carouselImages[3 * page + 2]}
              alt="carousel image"
              layout="fill"
              // objectFit="cover"
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
