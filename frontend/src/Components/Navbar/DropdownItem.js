import React from "react";
import { Link } from "react-router-dom";

export default function DropdownItem(props) {
  return (
    <Link className="p-4 hover:bg-blue-700" to="/">
      {props.pageName}
    </Link>
  );
}
