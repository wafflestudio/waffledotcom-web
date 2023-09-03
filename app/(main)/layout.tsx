import { ReactNode } from "react";
import Main from "../../components/common/Main/Main";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Main />
      {children}
    </>
  );
}
