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
            {activities.map((activity) => (
              <div key={activity.id} className={cx("carousel-item")}>
                <div className={cx("imageContainer")}>
                  <img src={activity.image} alt={activity.altImg} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ul className={cx("dots")}>
        {[0, 1, 2, 3, 4].map((id) => (
          <li key={id} className={cx("dot")}>
            <img
              src={
                id === selectedId
                  ? "/static/images/activity/dot_orange.svg"
                  : "/static/images/activity/dot_gray.svg"
              }
              alt=""
            />
          </li>
        ))}
      </ul>
    </>
  );
}
