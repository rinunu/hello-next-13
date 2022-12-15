import { Suspense } from "react";
import { Loading } from "../../../../util/components/common/loading";
import { ServerComponentStatus } from "../../../../util/components/component-status/server-component-status";
import { StaticDetail } from "../../../../util/components/static-detail";
import { Frame } from "../../../../util/components/common/frame";
import { Menu } from "../../../../util/components/menu/menu";
import { getStaticSampleList } from "../../../../backend/static-sample";

interface Props {
  params: { id: string };
}

export default function Page2({ params }: Props) {
  return (
    <Frame>
      <ServerComponentStatus />
      <Menu />

      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Server Component */}
        <StaticDetail id={params.id} />
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
