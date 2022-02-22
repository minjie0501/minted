import Link from "next/link";
import React from "react";

interface Props{
    pageName: string,
    className: string, 
    to: string
}

export function DropdownItem({pageName,to,className}:Props) {
  return (
    <Link href={to}>
      <a className={className}>
      {pageName}
      </a>
    </Link>
  );
}
