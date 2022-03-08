import React from "react";
import { Card } from "../HomeContentItems/Card";
import { ContentTable } from "../HomeContentItems/ContentTable";

interface Props  {
  items: any[],
  username:string
};

export function Closet({items,username}: Props) {

  return (
    <div className=" w-full h-full pt-10">
      <ContentTable title="Featured Items" page="profile">
        {items.map((item, idx) => (
          <Card key={idx}  item={item} />
        ))}
      </ContentTable>
    </div>
  );
}
