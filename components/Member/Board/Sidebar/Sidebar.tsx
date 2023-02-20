import { useState } from "react";
import styles from "./Sidebar.module.scss";
import { Checkbox, Radio, Toggle } from "./SidebarButtons";

function Sidebar() {
  const [roles, setRoles] = useState<Set<string>>(new Set());
  const [isActive, setIsActive] = useState<boolean>(true);
  const [alignGiveHeyWaffle, setAlignGiveHeyWaffle] = useState<boolean>(true);
  const [generationAscending, setGenerationAscending] = useState<boolean>(true);

  return (
    <div className={styles.container}>
      <div>
        <h1>멤버</h1>
      </div>
      <hr className={styles.hr}></hr>
      <div>
        <h2>필터</h2>
        <div className={styles.filter}>
          <div className={styles.filterName}>역할</div>
          <div className={styles.role}>
            <Checkbox
              value={"프론트엔드"}
              label={"프론트엔드"}
              set={roles}
              setSet={setRoles}
            />
            <Checkbox
              value={"백엔드"}
              label={"백엔드"}
              set={roles}
              setSet={setRoles}
            />
            <Checkbox
              value={"안드로이드"}
              label={"안드로이드"}
              set={roles}
              setSet={setRoles}
            />
            <Checkbox
              value={"iOS"}
              label={"iOS"}
              set={roles}
              setSet={setRoles}
            />
            <Checkbox
              value={"디자이너"}
              label={"디자이너"}
              set={roles}
              setSet={setRoles}
            />
          </div>
        </div>
        <div className={styles.filter}>
          <div className={styles.filterName}>기수</div>
        </div>
        <div className={styles.filter}>
          <div className={styles.filterName}>활동</div>
          <div className={styles.status}>
            <Radio
              value={true}
              label={"활동회원"}
              current={isActive}
              setCurrent={setIsActive}
            />
            <Radio
              value={false}
              label={"비활동회원"}
              current={isActive}
              setCurrent={setIsActive}
            />
          </div>
        </div>
      </div>
      <hr className={styles.hr}></hr>
      <div>
        <h2>정렬</h2>
        <div className={styles.align}>
          <div className={styles.alignName}>heywaffle</div>
          <Toggle
            label1={"to"}
            label2={"from"}
            checked={alignGiveHeyWaffle}
            setter={setAlignGiveHeyWaffle}
          />
        </div>
        <div className={styles.align}>
          <div className={styles.alignName}>기수</div>
          <Toggle
            label1={"오름차순"}
            label2={"내림차순"}
            checked={generationAscending}
            setter={setGenerationAscending}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
