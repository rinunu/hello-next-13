import { StaticItem } from "../static-item";
import { Frame } from "../common/frame";
import { ServerComponentStatus } from "../component-status/server-component-status";
import { Wrap } from "../common/wrap";

interface Props {
  id: string;
}

export function ListItem({ id }: Props) {
  return (
    <Frame>
      <ServerComponentStatus />
      {/* @ts-expect-error Server Component */}
      <StaticItem id={id} />
    </Frame>
  );
}
