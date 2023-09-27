import classNames from "classnames/bind";
import styles from "./Carousel.module.scss";
import { Activity } from "./Activity";

const cx = classNames.bind(styles);

type CarouselProps = {
  activities: Activity[];
  selectedId: number;
};

export default function Carousel({ activities, selectedId }: CarouselProps) {
  return (
    <>
      <div className={cx("carousel")}>
        <div className={cx("carousel-frame")}>
          <div
            className={cx("carousel-items-container", `state-${selectedId}`)}
          >
            {activities.map((activity, _) => (
              <CarouselItem key={_} activity={activity} />
            ))}
          </div>
        </div>
      </div>

      <ul className={cx("dots")}>
        {[0, 1, 2, 3, 4].map((id) =>
          id === selectedId ? (
            <li key={id} className={cx("rectangle")}>
              <img src="/static/images/activity/rectangle_orange.svg" alt="" />
            </li>
          ) : (
            <li key={id} className={cx("dot")}>
              <img src="/static/images/activity/dot_gray.svg" alt="" />
            </li>
          ),
        )}
      </ul>
    </>
  );
}

type CarouselItemProps = {
  activity: Activity;
};

function CarouselItem({ activity }: CarouselItemProps) {
  return (
    <div className={cx("carousel-item")}>
      <div className={cx("imageContainer")}>
        <img src={activity.image} alt={activity.altImg} />
      </div>
      <div className={cx("textContainer")}>
        <h1 className={cx("activityTitle")}>{activity.head}</h1>
        <p className={cx("activityDetail")}>{activity.detailDescription}</p>
      </div>
    </div>
  );
}
