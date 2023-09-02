import Link from "next/link";
import { ReactNode } from "react";

export default function WaffleLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return <Link href={href}>{children}</Link>;
}
