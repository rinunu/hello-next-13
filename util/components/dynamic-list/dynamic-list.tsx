import { Frame } from "../common/frame";
import { ServerComponentStatus } from "../component-status/server-component-status";
import { getDynamicSampleList } from "../../../backend/dynamic-sample";
import { GetButtonBox } from "./get-button-box";
import { Suspense } from "react";
import { Loading } from "../common/loading";
import { StaticItem } from "../static-item";
import { BlurSlider } from "./blur-slider";
import { ClientComponentStatus } from "../component-status/client-component-status";
import { HStack } from "../common/h-stack";
import { ControlBox } from "./control-box";

/**
 */
export async function DynamicList() {
  const ids = await getDynamicSampleList();

  return (
    <Frame>
      <ServerComponentStatus isDynamic />
      <HStack>
        {ids.slice(-5).map((id) => (
          <Frame minWidth="200px" maxWidth="200px" key={id}>
            <ServerComponentStatus />
            <Suspense fallback={<Loading />} key={id}>
              {/* @ts-expect-error Server Component */}
              <StaticItem id={id} size="lg" />
            </Suspense>
          </Frame>
        ))}
      </HStack>

      <ControlBox />
    </Frame>
  );
}
