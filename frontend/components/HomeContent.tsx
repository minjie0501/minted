import React, { ReactElement, useEffect, useState } from "react";
import { Card } from "./HomeContentItems/Card";
import { ContentTable } from "./HomeContentItems/ContentTable";

interface Props {}


export function HomeContent({}: Props) {
  const [nbOfCards, setNbOfCards] = useState(10);


  return (
    <div className=" w-full h-full pt-10">
      <ContentTable title="Featured Items">
        {Array.from({ length: nbOfCards }).map((_, i) => (
          <Card key={i} />
        ))}
      </ContentTable>
      <ContentTable title="Popular Brands">
        {Array.from({ length: nbOfCards }).map((_, i) => (
          <Card key={i} />
        ))}
      </ContentTable>
    </div>
  );
}
