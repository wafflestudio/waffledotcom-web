import Image from "next/image";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./IntroduceCarousel.module.scss";

const cx = classNames.bind(styles);

interface IntroduceCarouselProps {
  carouselImages: string[];
}

function IntroduceCarousel({ carouselImages }: IntroduceCarouselProps) {
  const [index, setIndex] = useState(0);

  return (
    <div className={cx("introduceCarousel")}>
      <Image
        src={carouselImages[index]}
        alt="snutt_1"
        width={864}
        height={486}
      />
      <div className={cx("carouselBar")}>
        <Image
          className={cx("hover")}
          src={"/static/images/arrow/left_arrow.svg"}
          alt="left arrow"
          width={16}
          height={43}
          onClick={() => {
            setIndex(index - 1);
          }}
        />
        {carouselImages.map((src: string, i: number) => {
          return (
            <div
              className={cx("imageWrapper", "hover", { active: index === i })}
              key={i}
              onClick={() => {
                setIndex(i);
              }}
            >
              <Image src={src} alt="carousel image" width={210} height={118} />
            </div>
          );
        })}
        <Image
          className={cx("hover")}
          src={"/static/images/arrow/right_arrow.svg"}
          alt="rigth arrow"
          width={16}
          height={43}
          onClick={() => {
            setIndex(index + 1);
          }}
        />
      </div>
    </div>
  );
}

export default IntroduceCarousel;
