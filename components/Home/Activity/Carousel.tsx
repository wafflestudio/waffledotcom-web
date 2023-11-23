import classNames from "classnames/bind";
import { useCallback, useRef } from "react";
import styles from "./Carousel.module.scss";
import { ActivityData } from "./ActivityData";

const cx = classNames.bind(styles);

type CarouselProps = {
  activities: ActivityData[];
  selectedId: number;
  setSelectedId: (_: number | ((_: number) => number)) => void;
};

export default function Carousel({
  activities,
  selectedId,
  setSelectedId,
}: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const carouselScrollHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const stride = window.innerWidth * 0.85;
      setSelectedId(Math.round(e.currentTarget.scrollLeft / stride));
    },
    [setSelectedId],
  );

  const indicatorClickHandler = (id: number) => () => {
    carouselRef.current?.scrollTo({
      left: (id * carouselRef.current.scrollWidth) / activities.length,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={cx("carousel")}>
        <div className={cx("carouselFrame")}>
          <div
            className={cx("carouselItemsContainer")}
            onScroll={carouselScrollHandler}
            ref={carouselRef}
          >
            {activities.map((activity, id) => (
              <CarouselItem key={id} activity={activity} />
            ))}
          </div>
        </div>
      </div>

      <ul className={cx("carouselIndicator")}>
        {activities.map((activity, id) => (
          <div
            key={id}
            className={cx("dot", id === selectedId ? "selected" : "")}
            onClick={indicatorClickHandler(id)}
          />
        ))}
      </ul>
    </>
  );
}

type CarouselItemProps = {
  activity: ActivityData;
};

function CarouselItem({ activity }: CarouselItemProps) {
  return (
    <div className={cx("carouselItem")}>
      <div className={cx("imageContainer")}>
        <img src={activity.image} alt={activity.altText} />
      </div>
      <div className={cx("textContainer")}>
        <h1 className={cx("activityTitle")}>{activity.head}</h1>
        <p className={cx("activityDetail")}>{activity.detailDescription}</p>
      </div>
    </div>
  );
}
