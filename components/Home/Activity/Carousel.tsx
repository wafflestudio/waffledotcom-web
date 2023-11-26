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
  const scrollSnapTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const carouselScrollHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      console.log(e.type);
      const stride = window.innerWidth * 0.85;
      setSelectedId(Math.round(e.currentTarget.scrollLeft / stride));
    },
    [setSelectedId],
  );

  const carouselMouseDownHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.cursor = "grabbing";
    e.currentTarget.style.scrollSnapType = "none";
    if (scrollSnapTimeoutRef.current) {
      clearTimeout(scrollSnapTimeoutRef.current);
    }
  };

  const carouselMouseMoveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.style.cursor === "grabbing") {
      e.currentTarget.scrollLeft -= e.movementX;
    }
  };

  const carouselMouseUpHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.cursor = "grab";
    const stride = window.innerWidth * 0.85;
    e.currentTarget.scrollTo({
      left: selectedId * stride,
      behavior: "smooth",
    });
    const target = e.currentTarget;
    scrollSnapTimeoutRef.current = setTimeout(() => {
      target.style.scrollSnapType = "x mandatory";
    }, 400);
  };

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
            onMouseDown={carouselMouseDownHandler}
            onMouseMove={carouselMouseMoveHandler}
            onMouseUp={carouselMouseUpHandler}
            ref={carouselRef}
            draggable={false}
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
        <img src={activity.image} alt={activity.altText} draggable={false} />
      </div>
      <div className={cx("textContainer")}>
        <h1 className={cx("activityTitle")}>{activity.head}</h1>
        <p className={cx("activityDetail")}>{activity.detailDescription}</p>
      </div>
    </div>
  );
}
