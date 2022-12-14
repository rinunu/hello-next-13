import {
  getStaticSampleDetail,
  StaticSample,
  StaticSampleListItem,
} from "../../backend/static-sample";
import { Frame } from "./frame";
import { ServerComponentStatus } from "./component-status/server-component-status";
import Image from "next/image";
import { BlurImage } from "./blur-image";

interface Props {
  id: string;
}

export async function SampleDetail({ id }: Props) {
  const p = await getStaticSampleDetail(id);
  return (
    <Frame>
      <ServerComponentStatus />
      <div>{p.name}</div>
      <BlurImage
        src={p.sprites.front_default!}
        alt="front"
        width={96}
        height={96}
      />
      <BlurImage
        src={p.sprites.back_default!}
        alt="back"
        width={96}
        height={96}
      />
      <BlurImage
        src={p.sprites.other["official-artwork"].front_default!}
        alt="official-artwork"
        width={300}
        height={300}
        blur={4}
      />
      {p.abilities.map((it) => (
        <div key={it.ability.name}>{it.ability.name}</div>
      ))}
    </Frame>
  );
}
