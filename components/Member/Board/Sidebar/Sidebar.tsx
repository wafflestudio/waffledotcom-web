import styles from "./Sidebar.module.scss";
import { Radio, Switch } from "./Button";
import { useState } from "react";

const Sidebar = () => {
  const [role, setRole] = useState<string>("designer");
  const [status, setStatus] = useState<string>("active");
  // const initialRole = useRef<HTMLInputElement>(null);
  // const initialState = useRef<HTMLInputElement>(null);
  // initialRole?.current?.focus();
  // initialState?.current?.focus();
  // console.log(initialState);
  // console.log(initialRole);

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
            <Radio
              value={"frontend"}
              label={"프론트엔드"}
              current={role}
              setter={setRole}
            />
            <Radio
              value={"backend"}
              label={"백엔드"}
              current={role}
              setter={setRole}
            />
            <Radio
              value={"android"}
              label={"안드로이드"}
              current={role}
              setter={setRole}
            />
            <Radio
              value={"ios"}
              label={"iOS"}
              current={role}
              setter={setRole}
            />
            <Radio
              value={"designer"}
              label={"디자이너"}
              current={role}
              setter={setRole}
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
              value={"active"}
              label={"활동회원"}
              current={status}
              setter={setStatus}
            />
            <Radio
              value={"inactive"}
              label={"비활동회원"}
              current={status}
              setter={setStatus}
            />
          </div>
        </div>
      </div>
      <hr className={styles.hr}></hr>
      <div>
        <h2>정렬</h2>
      </div>
    </div>
  );
};

export default Sidebar;
