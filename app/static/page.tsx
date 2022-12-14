import { SampleList } from "../../util/components/sample-list/sample-list";
import { Suspense } from "react";
import { Loading } from "../../util/components/loading";
import { DynamicData } from "../../util/components/dynamic-data";
import { Frame } from "../../util/components/frame";
import { ServerComponentStatus } from "../../util/components/component-status/server-component-status";
import { Menu } from "../../util/components/menu";

export default function Home() {
  return (
    <Frame>
      <ServerComponentStatus />
      <Menu />

      <DynamicData />

      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Server Component */}
        <SampleList />
      </Suspense>
    </Frame>
  );
}
