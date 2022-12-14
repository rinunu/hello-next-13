import { Frame } from "../util/components/frame";
import { ServerComponentStatus } from "../util/components/component-status/server-component-status";
import { Menu } from "../util/components/menu";

export default function Home() {
  return (
    <Frame>
      <ServerComponentStatus />
      <Menu />
    </Frame>
  );
}
