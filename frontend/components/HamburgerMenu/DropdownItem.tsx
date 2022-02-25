import Link from "next/link";
import React from "react";

interface Props {
  pageName: string;
  to: string;
}

export function DropdownItem({ pageName, to }: Props) {
  return (
    <Link href={to}>
      <a className="p-4 hover:bg-blue-700 border-zinc-300 border-b">{pageName}</a>
    </Link>
  );
}
