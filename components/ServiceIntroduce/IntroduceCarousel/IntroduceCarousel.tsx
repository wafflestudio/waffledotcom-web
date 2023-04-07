import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./IntroduceCarousel.module.scss";

const cx = classNames.bind(styles);

interface IntroduceCarouselProps {
  carouselImages: string[];
}

function IntroduceCarousel({ carouselImages }: IntroduceCarouselProps) {
  const [page, setPage] = useState(0);
  const [index, setIndex] = useState(0);

  const decreaseIndex = () => {
    if (page === 0 && index === 0) {
      return;
    } else if (index === 0) {
      setPage(page - 1);
      setIndex(2);
    } else {
      setIndex(index - 1);
    }
  };

  const increaseIndex = useCallback(() => {
    if (3 * page + index === carouselImages.length - 1) {
      return;
    } else if (index % 3 === 2) {
      setPage(page + 1);
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, [page, index, carouselImages.length]);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     increaseIndex();
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, [increaseIndex]);

  return (
    <div className={cx("introduceCarousel")}>
      <div className={cx("selectWrap")}>
        <Image
          className={cx("select")}
          src={carouselImages[3 * page + index]}
          alt="snutt_1"
          width={864}
          height={486}
        />
      </div>
      <div className={cx("carouselBar")}>
        <Image
          className={cx("hover")}
          src={"/static/images/arrow/left_arrow.svg"}
          alt="left arrow"
          width={16}
          height={43}
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
            width={210}
            height={118}
          />
        </div>
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
            width={210}
            height={118}
          />
        </div>
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
            width={210}
            height={118}
          />
        </div>
        <Image
          className={cx("hover")}
          src={"/static/images/arrow/right_arrow.svg"}
          alt="rigth arrow"
          width={16}
          height={43}
          onClick={() => {
            increaseIndex();
          }}
        />
      </div>
    </div>
  );
}

export default IntroduceCarousel;
