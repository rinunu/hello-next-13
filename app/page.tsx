import { Frame } from "../util/components/common/frame";
import { ServerComponentStatus } from "../util/components/component-status/server-component-status";
import { Menu } from "../util/components/menu/menu";

export default function Home() {
  return (
    <Frame>
      <ServerComponentStatus />
      <Menu />
    </Frame>
  );
}
