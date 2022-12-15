import { getStaticSampleDetail } from "../../backend/static-sample";
import Link from "next/link";
import { BlurImage } from "./blur-image";

interface Props {
  id: string;
  size: "md" | "lg";
}

export async function StaticItem({ id, size = "md" }: Props) {
  const p = await getStaticSampleDetail(id);
  const wh = size === "md" ? 96 : 200;
  const blur = size === "md" ? undefined : 4;
  return (
    <div>
      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {p.name}
      </div>
      <Link href={`/static/samples/${p.name}`}>
        <BlurImage
          src={
            size === "md"
              ? p.sprites.front_default!
              : p.sprites.other["official-artwork"].front_default!
          }
          alt="sample"
          width={wh}
          height={wh}
          blur={blur}
        />
      </Link>
    </div>
  );
}
