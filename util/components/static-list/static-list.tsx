import { getStaticSampleList } from "../../../backend/static-sample";
import { ServerComponentStatus } from "../component-status/server-component-status";
import { Frame } from "../common/frame";
import { Suspense } from "react";
import { Loading } from "../common/loading";
import { ListItem } from "./list-item";
import { Wrap } from "../common/wrap";

export async function StaticList() {
  const samples = await getStaticSampleList();
  return (
    <Frame>
      <ServerComponentStatus />
      <Wrap>
        {samples.map((it) => (
          <Suspense fallback={<Loading />} key={it.name}>
            <ListItem id={it.name} />
          </Suspense>
        ))}
      </Wrap>
    </Frame>
  );
}
