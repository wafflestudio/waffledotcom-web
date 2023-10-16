type ActivityData = {
  head: string;
  detailDescription: string;
  image: string;
  altText?: string;
};

const activities: ActivityData[] = [
  {
    head: "프로젝트",
    detailDescription:
      "와플스튜디오의 핵심 활동으로, 개발자와 디자이너가 팀을 이루고 프로젝트를 진행합니다.",
    image: "/static/images/activity/activity_img_sample.svg",
    altText: "Someone is programming a website with laptop",
  },
  {
    head: "세미나 및 토이프로젝트",
    detailDescription:
      "신입 루키 회원들을 대상으로 각 분야의 세미나가 진행됩니다. 학기 말에는 여러 분야가 팀을 이뤄 토이프로젝트에 참여합니다.",
    image: "/static/images/activity/seminar.jpg",
    altText: "Someone is programming a website with laptop",
  },
  {
    head: "굽기",
    detailDescription:
      "와플스튜디오의 핵심 활동으로, 개발자와 디자이너가 팀을 이루고 프로젝트를 진행합니다.",
    image: "/static/images/activity/bake.webp",
    altText: "Someone is programming a website with laptop",
  },
  {
    head: "와커톤",
    detailDescription:
      "와플스튜디오의 핵심 활동으로, 개발자와 디자이너가 팀을 이루고 프로젝트를 진행합니다.",
    image: "/static/images/activity/wackathon.webp",
    altText: "Someone is programming a website with laptop",
  },
  {
    head: "MT",
    detailDescription:
      "와플스튜디오의 핵심 활동으로, 개발자와 디자이너가 팀을 이루고 프로젝트를 진행합니다.",
    image: "/static/images/activity/mt.webp",
    altText: "Someone is programming a website with laptop",
  },
];

export default activities;
export type { ActivityData };
