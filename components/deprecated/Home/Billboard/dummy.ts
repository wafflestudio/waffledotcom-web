import { StaticImageData } from "next/legacy/image";
import image1 from "../../../../public/static/images/dummy/untitled2.png";
import image2 from "../../../../public/static/images/dummy/Untitled.png";
import image3 from "../../../../public/static/images/dummy/Rectangle 80.png";
import image4 from "../../../../public/static/images/dummy/coMo.png";
export type IDummyBanner = {
  title: string;
  backgroundColor: string;
  backgroundImage?: StaticImageData;
  url: null | string;
};

export const dummyBanners: IDummyBanner[] = [
  {
    title: "와플스튜디오",
    backgroundColor: "#7bff59",
    backgroundImage: image1,
    url: "https://www.naver.com/",
  },
  {
    title: "인스타그램",
    backgroundColor: "#e224ff",
    backgroundImage: image2,
    url: "https://www.instagram.com/",
  },
  {
    title: "신입생 모집",
    backgroundColor: "#f14141",
    backgroundImage: image3,
    url: "https://www.youtube.com/",
  },
  {
    title: "앱 출시",
    backgroundColor: "#41bcf1",
    backgroundImage: image4,
    url: "https://www.instagram.com/",
  },
];
