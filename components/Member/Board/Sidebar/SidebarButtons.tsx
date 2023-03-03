import { useState } from "react";
import styles from "./SidebarButtons.module.scss";

type RadioProps<T> = {
  value: T;
  label: string;
  current: T;
  setCurrent: (arg: T) => void;
};

export function Radio<T>({ value, label, current, setCurrent }: RadioProps<T>) {
  const checkHandler = () => {
    setCurrent(value);
  };

  return (
    <label className={styles.radio}>
      <input
        type={"checkbox"}
        checked={current === value}
        value={String(value)}
        onChange={() => checkHandler()}
      />
      <span>{label}</span>
    </label>
  );
}

type checkboxProps = {
  value: string;
  label: string;
  set: Set<string>;
  setSet: (arg: Set<string>) => void;
};

export function Checkbox({ value, label, set, setSet }: checkboxProps) {
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
    <label className={styles.checkbox}>
      <input
        type={"checkbox"}
        checked={checked}
        value={value}
        onChange={() => {
          checkHandler();
        }}
      />
      <span>{label}</span>
    </label>
  );
}

type switchProps = {
  label1: string;
  label2: string;
  checked: boolean;
  setter: (arg: boolean) => void;
};

export function Toggle({ label1, label2, checked, setter }: switchProps) {
  const checkHandler = () => {
    setter(!checked);
  };

  return (
    <label className={styles.toggle}>
      <input
        type={"checkbox"}
        checked={checked}
        onChange={() => checkHandler()}
      />
      <div className={styles.label1Container}>
        <span className={styles.label1}>{label1}</span>
      </div>
      <div className={styles.label2Container}>
        <span className={styles.label2}>{label2}</span>
      </div>
    </label>
  );
}

type dropdownProps = {
  arr: string[];
  current: string;
  setCurrent: (arg: string) => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Dropdown({ arr, current, setCurrent }: dropdownProps) {
  return (
    <div>
      <div></div>
    </div>
  );
}
