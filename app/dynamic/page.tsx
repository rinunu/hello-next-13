import { Frame } from "../../util/components/common/frame";
import { ServerComponentStatus } from "../../util/components/component-status/server-component-status";
import { Menu } from "../../util/components/menu/menu";
import { DynamicList } from "../../util/components/dynamic-list/dynamic-list";

export default function Home() {
  return (
    <Frame>
      <ServerComponentStatus />
      <Menu />

      {/* @ts-expect-error Server Component */}
      <DynamicList />
    </Frame>
  );
}
