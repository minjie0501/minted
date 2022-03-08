import React, { ReactElement, useEffect, useState } from "react";
import { Card } from "./HomeContentItems/Card";
import { ContentTable } from "./HomeContentItems/ContentTable";

interface Props {
  items: {
    items: any; // TODO: this is not good
  };
}

export function HomeContent({ items }: Props) {
  const [nbOfCards, setNbOfCards] = useState(10);
  return (
    <div className="w-full h-full pt-10">
      <ContentTable title="Featured Items">
        {items.items.map((item: any, idx: number) => (
          <Card key={idx} username={item.sellerId.username} item={item} />
        ))}
      </ContentTable>
      <ContentTable title="Popular Brands">
        {items.items.map((item: any, idx: number) => (
          <Card key={idx} username={item.sellerId.username} item={item} />
        ))}
      </ContentTable>
    </div>
  );
}
