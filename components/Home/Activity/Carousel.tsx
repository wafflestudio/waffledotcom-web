import classNames from "classnames/bind";
import styles from "./Carousel.module.scss";
import { ActivityData } from "./ActivityData";

const cx = classNames.bind(styles);

type CarouselProps = {
  activities: ActivityData[];
  selectedId: number;
};

export default function Carousel({ activities, selectedId }: CarouselProps) {
  return (
    <>
      <div className={cx("carousel")}>
        <div className={cx("carouselFrame")}>
          <div className={cx("carouselItemsContainer", `state-${selectedId}`)}>
            {activities.map((activity, id) => (
              <CarouselItem key={id} activity={activity} />
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
