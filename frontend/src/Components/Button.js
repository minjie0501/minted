import React from "react";

export default function Button(props) {
  return <button class="bg-zinc-300 hover:bg-blue-700 text-slate-700 font-bold ml-3 py-1 px-2 rounded">{props.value}</button>;
}
