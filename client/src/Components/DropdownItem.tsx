import React from "react";
import { Link } from "react-router-dom";

interface Props{
    pageName: string,
    className: string, 
    to: string
}

export const DropdownItem:React.FC<Props> = ({pageName,to}) => {
  return (
    <Link className="p-4 hover:bg-blue-700" to={to}>
      {pageName}
    </Link>
  );
}
