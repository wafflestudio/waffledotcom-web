import Link from "next/link";
import { ReactNode } from "react";

export default function WaffleLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
