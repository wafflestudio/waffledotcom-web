import { ReactNode } from "react";
import Cover from "../../components/Home/Cover/Cover";
import styles from "./Home.module.scss";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <Cover />
      {children}
    </div>
  );
}
