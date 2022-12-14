import { SampleItem } from "../sample-item";
import { GetButtonArea } from "./get-button-area";
import { Frame } from "../frame";
import { ServerComponentStatus } from "../component-status/server-component-status";

interface Props {
  id: string;
}

export function ListItem({ id }: Props) {
  return (
    <Frame>
      <ServerComponentStatus />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* @ts-expect-error Server Component */}
        <SampleItem id={id} />
      </div>
    </Frame>
  );
}
