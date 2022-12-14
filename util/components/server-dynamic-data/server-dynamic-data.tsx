import { Frame } from "../frame";
import { ServerComponentStatus } from "../component-status/server-component-status";
import { getDynamicSampleList } from "../../../backend/dynamic-sample";
import { GetButtonBox } from "./get-button-box";
import { Suspense } from "react";
import { Loading } from "../loading";
import { SampleItem } from "../sample-item";
import { BlurSlider } from "./blur-slider";
import { ClientComponentStatus } from "../component-status/client-component-status";

/**
 */
export async function ServerDynamicData() {
  const ids = await getDynamicSampleList();

  return (
    <Frame>
      <ServerComponentStatus isDynamic />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          overflow: "scroll",
        }}
      >
        {ids.slice(-5).map((id) => (
          <div style={{ minWidth: "200px", maxWidth: "200px" }} key={id}>
            <Frame>
              <ServerComponentStatus />
              <Suspense fallback={<Loading />}>
                {/* @ts-expect-error Server Component */}
                <SampleItem id={id} size="lg" />
              </Suspense>
            </Frame>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <GetButtonBox />

        <Frame>
          <ClientComponentStatus />
          ぼかし調整
          <BlurSlider />
        </Frame>
      </div>
    </Frame>
  );
}
