import { StaticList } from "../../util/components/static-list/static-list";
import { Suspense } from "react";
import { Loading } from "../../util/components/common/loading";
import { Frame } from "../../util/components/common/frame";
import { ServerComponentStatus } from "../../util/components/component-status/server-component-status";
import { Menu } from "../../util/components/menu/menu";

export default function Home() {
  return (
    <Frame>
      <ServerComponentStatus />
      <Menu />

      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Server Component */}
        <StaticList />
      </Suspense>
    </Frame>
  );
}
