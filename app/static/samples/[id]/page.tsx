import { Suspense } from "react";
import { Loading } from "../../../../util/components/loading";
import { ServerComponentStatus } from "../../../../util/components/component-status/server-component-status";
import { SampleDetail } from "../../../../util/components/sample-detail";
import { Frame } from "../../../../util/components/frame";
import { Menu } from "../../../../util/components/menu";
import { getStaticSampleList } from "../../../../backend/static-sample";
import { DynamicData } from "../../../../util/components/dynamic-data";

interface Props {
  params: { id: string };
}

export default function Page2({ params }: Props) {
  return (
    <Frame>
      <ServerComponentStatus />
      <Menu />
      <DynamicData />

      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Server Component */}
        <SampleDetail id={params.id} />
      </Suspense>
    </Frame>
  );
}

export async function generateStaticParams() {
  const a = await getStaticSampleList();

  return a.map((it) => ({
    id: it.name,
  }));
}
