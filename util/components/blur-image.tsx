"use client";
import Image from "next/image";
import { blurValueState } from "../blur-value";
import { useRecoilValue } from "recoil";
import { Frame } from "./frame";
import { ClientComponentStatus } from "./component-status/client-component-status";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  blur?: number;
}

export function BlurImage({ alt, blur = 2, ...rest }: Props) {
  const blurValue = useRecoilValue(blurValueState);
  return (
    <Frame>
      <ClientComponentStatus />
      <Image
        alt={alt}
        {...rest}
        style={{
          filter: `blur(${blur * blurValue}px)`,
        }}
      />
    </Frame>
  );
}
