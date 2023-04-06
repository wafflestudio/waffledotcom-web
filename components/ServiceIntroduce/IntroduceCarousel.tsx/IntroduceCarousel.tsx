import classNames from "classnames/bind";
import useWaffleScroll from "../../../library/waffleScroll";
import styles from "./IntroduceCarousel.module.scss";

const cx = classNames.bind(styles);

function IntroduceCarousel() {
  const { ref, scrollState } = useWaffleScroll(
    ({ toggleState }) => {
      toggleState(0.5, 2.9, "available");
    },
    { available: false },
  );

  return <></>;
}

export default IntroduceCarousel;
