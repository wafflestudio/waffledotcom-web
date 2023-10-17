import classNames from "classnames/bind";
import { useCallback, useMemo } from "react";
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
  const carouselScrollHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const stride = window.innerWidth * 0.85;
      setSelectedId(Math.round(e.currentTarget.scrollLeft / stride));
    },
    [],
  );

  return (
    <>
      <div className={cx("carousel")}>
        <div className={cx("carouselFrame")}>
          <div
            className={cx("carouselItemsContainer")}
            onScroll={carouselScrollHandler}
          >
            {activities.map((activity, id) => (
              <CarouselItem key={id} activity={activity} />
            ))}
          </div>
        </div>
      </div>

      <ul className={cx("carouselIndicator")}>
        {[0, 1, 2, 3, 4].map((id) => (
          <div
            key={id}
            className={cx("dot", id === selectedId ? "selected" : "")}
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
