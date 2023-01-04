import styles from "./SidebarButtons.module.scss";
import { Dispatch, SetStateAction, useState } from "react";

type radioProps = {
  value: any;
  label: string;
  current: any;
  setCurrent: (arg: any) => void;
};

export const Radio = ({ value, label, current, setCurrent }: radioProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const checkHandler = () => {
    setCurrent(value);
  };

  return (
    <div className={styles.radio} onClick={checkHandler}>
      <input type={"checkbox"} checked={current === value} value={value} />
      <label>{label}</label>
    </div>
  );
};

type checkboxProps = {
  value: any;
  label: string;
  set: Set<any>;
  setSet: (arg: Set<any>) => void;
};

export const Checkbox = ({ value, label, set, setSet }: checkboxProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const checkHandler = () => {
    if (set.has(value)) {
      set.delete(value);
      setChecked(false);
    } else {
      set.add(value);
      setChecked(true);
    }
    setSet(new Set(set));
  };
  return (
    <div className={styles.checkbox} onClick={checkHandler}>
      <input type={"checkbox"} checked={checked} value={value} />
      <label>{label}</label>
    </div>
  );
};

type switchProps = {
  label1: string;
  label2: string;
  checked: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
};

export const Switch = ({ label1, label2, checked, setter }: switchProps) => {
  const checkHandler = () => {
    setter(!checked);
  };

  return (
    <div className={styles.switch} onClick={checkHandler}>
      <input type={"checkbox"} checked={checked} />
      <div className={styles.label1Container}>
        <span className={styles.label1}>{label1}</span>
      </div>
      <div className={styles.label2Container}>
        <span className={styles.label2}>{label2}</span>
      </div>
    </div>
  );
};
