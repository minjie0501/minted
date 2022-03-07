import React from "react";
import { Card } from "../HomeContentItems/Card";
import { ContentTable } from "../HomeContentItems/ContentTable";

interface Props  {
  items: any[],
  username:string
};

export function Closet({items,username}: Props) {

  console.log(items[0])
  return (
    <div className=" w-full h-full pt-10">
      <ContentTable title="Featured Items" page="profile">
        {items.map((item, idx) => (
          <Card key={idx} username={username} item={item} />
        ))}
      </ContentTable>
    </div>
  );
}
