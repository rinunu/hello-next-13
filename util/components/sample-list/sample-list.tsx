import { getStaticSampleList } from "../../../backend/static-sample";
import { ServerComponentStatus } from "../component-status/server-component-status";
import { Frame } from "../frame";
import { Suspense } from "react";
import { Loading } from "../loading";
import { ListItem } from "./listItem";

export async function SampleList() {
  const samples = await getStaticSampleList();
  return (
    <Frame>
      <ServerComponentStatus />
      {samples.map((it) => (
        <Suspense fallback={<Loading />} key={it.name}>
          <ListItem id={it.name} />
        </Suspense>
      ))}
    </Frame>
  );
}
