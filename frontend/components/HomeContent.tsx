import React from "react";
import { Card } from "./HomeContentItems/Card";
import { ContentTable } from "./HomeContentItems/ContentTable";

interface Props {}

export function HomeContent({}: Props) {
  return (
    <div className="border-red-200 border-2 w-full h-full pt-10">
      <ContentTable title="Featured Items">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ContentTable>
      <ContentTable title="Popular Brands">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ContentTable>
    </div>
  );
}
