import styles from "./Button.module.scss";
import { Dispatch, SetStateAction, useState } from "react";

type radioProps = {
  value: string;
  label: string;
  current: string;
  setter: Dispatch<SetStateAction<string>>;
};

export const Radio = ({ value, label, current, setter }: radioProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const checkHandler = () => {
    setter(value);
  };

  return (
    <div className={styles.radio} onClick={checkHandler}>
      <input type={"radio"} checked={current === value} value={value} />
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
  return (
    <div>
      <input type={"checkbox"} />
      <span></span>
    </div>
  );
};
