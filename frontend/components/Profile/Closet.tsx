import React from "react";
import { Card } from "../HomeContentItems/Card";
import { ContentTable } from "../HomeContentItems/ContentTable";

type Props = {};

export function Closet({}: Props) {
  return (
    <div className=" w-full h-full pt-10">
      <ContentTable title="Featured Items" page="profile">
        {Array.from({ length: 10 }).map((_, i) => (
          <Card key={i} />
        ))}
      </ContentTable>
    </div>
  );
}
